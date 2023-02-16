import { ScrollView, View, Text } from 'react-native';

import { useFetchRandomCharacterQuery } from '../features/characters/charactersApiSlice';

function HomeScreen() {
	const {
		data,
		isFetching,
		isError,
		isSuccess
	} = useFetchRandomCharacterQuery();

	if (isFetching) {
		return (
			<View>
				<Text>Fetching...</Text>
			</View>
		);
	}

	if (isError) {
		return (
			<View>
				<Text>Error...</Text>
			</View>
		);
	}

	if (isSuccess) {
		return (
			<ScrollView>
				<Text>{JSON.stringify(data, null, 2)}</Text>
			</ScrollView>
		);
	}

	return (
		<View>
			<Text>I am a Home Screen</Text>
		</View>
	);
}

export default HomeScreen;
