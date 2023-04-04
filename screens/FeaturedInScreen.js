import { useState, useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import ScreenTemplate from '../components/hoc/ScreenTemplate';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorDisplay from '../components/ErrorDisplay';
import ListItem from '../components/details/ListItem';
import Attribution from '../components/Attribution';
import Pagination from '../components/Pagination';
import { CharacterContext } from '../context/character-context';
import { useFetchComicsByCharacterIdQuery } from '../features/comics/comicsApiSlice';
import { useFetchSeriesByCharacterIdQuery } from '../features/series/seriesApiSlice';
import { useFetchStoriesByCharacterIdQuery } from '../features/stories/storiesApiSlice';
import { extractedAttributionURL } from '../util/utilityFunctions';
import Colors from '../constants/colors';

function FeaturedInScreen({ route }) {
	const characterCtx = useContext(CharacterContext);
	const characterId = characterCtx.selectedCharacterId;

	const [page, setPage] = useState(1);
	const perPage = 20;

	let applicableHook;

	if (route.name === 'comics') {
		applicableHook = useFetchComicsByCharacterIdQuery({
			page,
			perPage,
			characterId
		});
	} else if (route.name === 'series') {
		applicableHook = useFetchSeriesByCharacterIdQuery({
			page,
			perPage,
			characterId
		});
	} else if (route.name === 'stories') {
		applicableHook = useFetchStoriesByCharacterIdQuery({
			page,
			perPage,
			characterId
		});
	}

	const { data, isLoading, isError, isSuccess } = applicableHook;

	if (isLoading) {
		return <LoadingSpinner size={64} color={Colors.secondary800} />;
	}

	if (isError) {
		return <ErrorDisplay />;
	}

	const attrURL = extractedAttributionURL(data.attributionHTML);

	if (isSuccess) {
		return (
			<ScreenTemplate headerPadding={true}>
				<View>
					<Attribution
						attributionText={data.attributionText}
						attributionURL={attrURL}
					/>

					<Pagination
						itemsPerPage={perPage}
						totalNumItems={data.data.total}
						page={page}
						setPage={setPage}
					/>

					<View style={styles.listContainer}>
						<FlatList
							data={data.data.results}
							renderItem={({ item, index }) => {
								return (
									<ListItem
										smallText={index + 1 + page * perPage - perPage} // 0+1+(1*20)-20=1; 0+1+(2*20)-20=21 etc.
										text1={item.title}
										thumbnailUrl={
											item.thumbnail &&
											item.thumbnail.path +
												'/standard_medium.' +
												item.thumbnail.extension
										}
										extraStyles={{ text1: { fontSize: 24 } }}
									/>
								);
							}}
							keyExtractor={item => item.id}
						/>
					</View>
				</View>
			</ScreenTemplate>
		);
	}
}

export default FeaturedInScreen;

const styles = StyleSheet.create({
	listContainer: {
		paddingBottom: 185
	}
});
