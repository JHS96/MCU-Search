import { useState, useCallback } from 'react';
import {
	ScrollView,
	RefreshControl,
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';

import Attribution from '../Attribution';
import GlobalStyles from '../../constants/globalStyles';

function Details({
	imageSource,
	heading,
	attributionText,
	attributionURL,
	isRefreshable,
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
					isRefreshable && (
						<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
					)
				}
			>
				<View>
					{imageSource && (
						<View style={styles.imageContainer}>
							<Image source={{ uri: imageSource }} style={styles.image} />
						</View>
					)}
					<View style={GlobalStyles.headingContainer}>
						<Text style={GlobalStyles.headingText}>{heading}</Text>
					</View>
				</View>

				<View style={styles.childrenContainer}>{children}</View>
			</ScrollView>

			<Attribution
				attributionText={attributionText}
				attributionURL={attributionURL}
			/>
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
	}
});
