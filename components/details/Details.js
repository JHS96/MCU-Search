import { useState, useCallback } from 'react';
import {
	ScrollView,
	RefreshControl,
	View,
	Pressable,
	Text,
	Image,
	Linking,
	StyleSheet
} from 'react-native';

import Colors from '../../constants/colors';
import GlobalStyles from '../../constants/globalStyles';

function Details({
	imageSource,
	heading,
	attributionText,
	attributionURL,
	refetch,
	children
}) {
	const [isRefreshing, setIsRefreshing] = useState(false);

	const onRefresh = useCallback(async () => {
		setIsRefreshing(true);
		await refetch();
		setIsRefreshing(false);
	}, []);

	return (
		<View style={styles.rootContainer}>
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
				}
			>
				<View>
					<View style={styles.imageContainer}>
						<Image source={{ uri: imageSource }} style={styles.image} />
					</View>
					<View style={GlobalStyles.headingContainer}>
						<Text style={GlobalStyles.headingText}>{heading}</Text>
					</View>
				</View>

				<View style={styles.childrenContainer}>{children}</View>
			</ScrollView>

			<Pressable
				style={styles.attributionContainer}
				onPress={() => Linking.openURL(attributionURL)}
				android_ripple={{ color: Colors.primary600 }}
			>
				<Text style={styles.attributionText}>{attributionText}</Text>
			</Pressable>
		</View>
	);
}

export default Details;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: 'transparent'
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
	attributionContainer: {
		backgroundColor: Colors.primary400,
		width: '100%'
	},
	attributionText: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		textAlign: 'center',
		fontSize: 14,
		color: Colors.primary700,
		fontFamily: 'roboto-bold-italic'
	}
});
