import { FlatList, StyleSheet } from 'react-native';

import ScreenTemplate from '../components/hoc/ScreenTemplate';
import DetailsListItem from '../components/details/DetailsListItem';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorDisplay from '../components/ErrorDisplay';
import { useSearchCharactersQuery } from '../features/characters/charactersApiSlice';
import Colors from '../constants/colors';

function ListScreen({ route }) {
	const { data, isFetching, isError, isSuccess } = useSearchCharactersQuery(
		route.params.searchParam
	);

	if (isFetching) {
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
					renderItem={({ item }) => <DetailsListItem text1={item.name} />}
					keyExtractor={item => item.id}
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
