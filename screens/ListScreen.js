import { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import ScreenTemplate from '../components/hoc/ScreenTemplate';
import DetailsListItem from '../components/details/DetailsListItem';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorDisplay from '../components/ErrorDisplay';
import {
	useSearchCharactersQuery,
	charactersApiSlice
} from '../features/characters/charactersApiSlice';
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
		return (
			<ScreenTemplate headerPadding={true}>
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
					renderItem={({ item }) => (
						<DetailsListItem
							onPress={() => navigation.navigate('Character', { id: item.id })}
							text1={item.name}
							thumbnailUrl={
								item.thumbnail.path +
								'/standard_medium.' +
								item.thumbnail.extension
							}
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
			</ScreenTemplate>
		);
	}
}

// TODO - Add attribution

export default ListScreen;

const styles = StyleSheet.create({
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
