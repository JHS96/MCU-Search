import { View, Text } from 'react-native';

import Details from '../components/details/Details';
import { useFetchRandomCharacterQuery } from '../features/characters/charactersApiSlice';

function HomeScreen() {
	const { data, isFetching, isError, isSuccess } =
		useFetchRandomCharacterQuery();

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
			<Details
				imageSource={data.data.results[0].thumbnail.path + '/detail.jpg'}
				heading={data.data.results[0].name}
				attributionText={data.attributionText}
				attributionURL={'https://google.com'} // TODO: Replece this placeholder url with dynamic url
			/>
		);
	}

	return (
		<View>
			<Text>I am a Home Screen</Text>
		</View>
	);
}

export default HomeScreen;
