import {
	ScrollView,
	View,
	Pressable,
	Text,
	Image,
	Linking,
	StyleSheet
} from 'react-native';

import Colors from '../../constants/colors';

function Details({
	imageSource,
	heading,
	attributionText,
	attributionURL,
	children
}) {
	return (
		<View style={styles.rootContainer}>
			<ScrollView>
				<View>
					<View style={styles.imageContainer}>
						<Image source={{ uri: imageSource }} style={styles.image} />
					</View>
					<View style={styles.headingContainer}>
						<Text style={styles.headingText}>{heading}</Text>
					</View>
				</View>

				<View style={styles.childrenContainer}>{children}</View>
			</ScrollView>

			<View style={styles.attributionContainer}>
				<Pressable
					onPress={() => Linking.openURL(attributionURL)}
					android_ripple={{ color: Colors.primary600 }}
				>
					<Text style={styles.attributionText}>{attributionText}</Text>
				</Pressable>
			</View>
		</View>
	);
}

export default Details;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: Colors.primary300
	},
	childrenContainer: {
		padding: 6
	},
	imageContainer: {
		height: 300
	},
	image: {
		height: '100%',
		resizeMode: 'cover'
	},
	headingContainer: {
		backgroundColor: Colors.primary400,
		paddingHorizontal: 8,
		paddingVertical: 4
	},
	headingText: {
		textAlign: 'center',
		fontSize: 36,
		color: Colors.secondary800
	},
	attributionContainer: {
		alignSelf: 'center',
		borderRadius: 10,
		overflow: 'hidden'
	},
	attributionText: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		textAlign: 'center',
		fontSize: 12,
		color: Colors.primary700
	}
});
