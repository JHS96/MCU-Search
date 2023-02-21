import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

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
		const imgSource = data.data.results[0].thumbnail.path + '/detail.jpg';

		return (
			<ScrollView>
				<View style={styles.imageContainer}>
					<Image source={{ uri: imgSource }} style={styles.image} />
				</View>
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

const styles = StyleSheet.create({
	imageContainer: {
		height: 300
	},
	image: {
		height: '100%',
		resizeMode: 'center'
	}
});
