import { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import ScreenTemplate from '../components/hoc/ScreenTemplate';
import ListItem from '../components/details/ListItem';
import Attribution from '../components/Attribution';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorDisplay from '../components/ErrorDisplay';
import {
	useSearchCharactersQuery,
	charactersApiSlice
} from '../features/characters/charactersApiSlice';
import { extractedAttributionURL } from '../util/utilityFunctions';
import Colors from '../constants/colors';

function ListScreen({ route, navigation }) {
	const [page, setPage] = useState(1);
	const { data, isLoading, isError, isSuccess } = useSearchCharactersQuery({
		page,
		searchParam: route.params.searchParam
	});
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(charactersApiSlice.util.resetApiState());
		};
	}, []);

	if (isLoading) {
		return <LoadingSpinner size={64} color={Colors.secondary800} />;
	}

	if (isError) {
		return <ErrorDisplay />;
	}

	if (isSuccess) {
		const attrUrl = extractedAttributionURL(data.attributionHTML);

		return (
			<ScreenTemplate headerPadding={true}>
				<Text style={styles.resultCount}>{data.data.total} Results</Text>

				{!data.data.results.length && (
					<View style={styles.noResultsTextContainer}>
						<Text style={styles.noResultsText1}>
							No results for your search term:{' '}
							<Text style={styles.noResultsText2}>
								{route.params.searchParam}
							</Text>
						</Text>
					</View>
				)}

				<FlatList
					data={data.data.results}
					renderItem={({ item, index }) => (
						<ListItem
							onPress={() => navigation.navigate('Character', { id: item.id })}
							smallText={index + 1}
							text1={item.name}
							thumbnailUrl={
								item.thumbnail.path +
								'/standard_medium.' +
								item.thumbnail.extension
							}
							extraStyles={{ text1: { fontSize: 26 } }}
						/>
					)}
					keyExtractor={item => item.id}
					onEndReachedThreshold={0.5}
					onEndReached={() => {
						if (data.data.results.length < data.data.total) {
							setPage(prevPageNum => prevPageNum + 1);
						}
					}}
				/>

				<Attribution
					attributionText={data.attributionText}
					attributionURL={attrUrl}
				/>
			</ScreenTemplate>
		);
	}
}

export default ListScreen;

const styles = StyleSheet.create({
	resultCount: {
		textAlign: 'center',
		fontSize: 24,
		fontFamily: 'roboto-bold',
		textDecorationLine: 'underline',
		marginBottom: 10
	},
	listContainer: {
		flex: 1
	},
	noResultsTextContainer: {
		marginTop: 12
	},
	noResultsText1: {
		textAlign: 'center',
		fontSize: 24,
		fontFamily: 'roboto-regular'
	},
	noResultsText2: {
		fontFamily: 'roboto-bold-italic'
	}
});
