import { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
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

function ListScreen({ route }) {
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
				<FlatList
					data={data.data.results}
					renderItem={({ item }) => (
						<DetailsListItem
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
	}
});
