import { View, FlatList, Text } from 'react-native';

import ScreenTemplate from '../components/hoc/ScreenTemplate';
import { store } from '../store/store';

function FeaturedInScreen({ route }) {
	let arr = [];

	const state = store.getState('charactersApiSlice');
	if (state.characterApi.queries.hasOwnProperty('fetchRandomCharacter(null)')) {
		arr =
			state.characterApi.queries['fetchRandomCharacter(null)'].data.data
				.results[0][route.name].items;
	} else {
		// Extract the name of the key (including the id argument) & use said key to
		// access the correct property of the queries object nested in state
		const objKeysArr = Object.keys(state.characterApi.queries);
		const idxOfKey = objKeysArr.findIndex(item =>
			item.includes('fetchCharacterById')
		);
		const key = objKeysArr[idxOfKey];
		arr =
			state.characterApi.queries[key].data.data.results[0][route.name].items;
	}

	return (
		<ScreenTemplate headerPadding={true}>
			<View>
				<FlatList
					data={arr}
					renderItem={({ item }) => {
						return <Text key={item.name}>{item.name}</Text>;
					}}
					keyExtractor={item => item.name}
				/>
			</View>
		</ScreenTemplate>
	);
}

export default FeaturedInScreen;
