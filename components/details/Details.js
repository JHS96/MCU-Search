import {
	ScrollView,
	View,
	Pressable,
	Text,
	Image,
	Linking,
	StyleSheet
} from 'react-native';

function Details({ imageSource, heading, attributionText, attributionURL }) {
	return (
		<ScrollView style={styles.rootContainer}>
			<View style={styles.imageContainer}>
				<Image source={{ uri: imageSource }} style={styles.image} />
			</View>
			<View style={styles.headingContainer}>
				<Text style={styles.headingText}>{heading}</Text>
			</View>
			<Pressable
				style={styles.attributionContainer}
				onPress={() => Linking.openURL(attributionURL)}
				android_ripple={{ color: '#aaaaaa' }} // TODO: Improve color
			>
				<Text style={styles.attributionText}>{attributionText}</Text>
			</Pressable>
		</ScrollView>
	);
}

export default Details;

const styles = StyleSheet.create({
	rootContainer: {
		backgroundColor: '#aaaeee' // TODO: Improve color - maybe ;)
	},
	imageContainer: {
		height: 300,
		marginVertical: 8
	},
	image: {
		height: '100%',
		resizeMode: 'center'
	},
	headingContainer: {
		paddingHorizontal: 8,
		paddingVertical: 4
	},
	headingText: {
		textAlign: 'center',
		fontSize: 36,
		fontWeight: 'bold'
	},
	attributionContainer: {
		marginHorizontal: 8,
		justifyContent: 'center',
		alignContent: 'center',
		alignSelf: 'center'
	},
	attributionText: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		textAlign: 'center',
		fontSize: 12,
		fontWeight: 'bold',
		color: 'blue'
	}
});
