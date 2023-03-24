import { useContext } from 'react';
import { View, FlatList } from 'react-native';

import ScreenTemplate from '../components/hoc/ScreenTemplate';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorDisplay from '../components/ErrorDisplay';
import DetailsListItem from '../components/details/DetailsListItem';
import Attribution from '../components/Attribution';
import { CharacterContext } from '../context/character-context';
import { useFetchComicsByCharacterIdQuery } from '../features/comics/comicsApiSlice';
import { extractedAttributionURL } from '../util/utilityFunctions';
import Colors from '../constants/colors';

function FeaturedInScreen() {
	const characterCtx = useContext(CharacterContext);
	const characterId = characterCtx.selectedCharacterId;

	const { data, isLoading, isError, isSuccess } =
		useFetchComicsByCharacterIdQuery(characterId);

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
					<FlatList
						data={data.data.results}
						renderItem={({ item }) => {
							return (
								<DetailsListItem
									text1={item.title}
									thumbnailUrl={
										item.thumbnail.path +
										'/standard_medium.' +
										item.thumbnail.extension
									}
								/>
							);
						}}
						keyExtractor={item => item.title}
					/>
				</View>
			</ScreenTemplate>
		);
	}
}

export default FeaturedInScreen;
