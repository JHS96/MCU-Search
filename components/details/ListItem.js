import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function ListItem({
	smallText,
	text1,
	text2,
	thumbnailUrl,
	onPress,
	extraStyles
}) {
	return (
		<Pressable
			onPress={onPress}
			android_ripple={{ color: Colors.primary600, foreground: true }}
			style={[styles.rootContainer, extraStyles?.rootContainer]}
		>
			{smallText && (
				<View>
					<Text style={[styles.smallText, extraStyles?.smallText]}>
						{smallText}
					</Text>
				</View>
			)}

			<View style={styles.mainContentContainer}>
				{thumbnailUrl && (
					<View style={styles.imageContainer}>
						<Image source={{ uri: thumbnailUrl }} style={styles.image} />
					</View>
				)}

				<View style={styles.textContainer}>
					<Text style={[styles.text1, extraStyles?.text1]}>
						{text1}{' '}
						<Text style={[styles.text2, extraStyles?.text2]}>{text2}</Text>
					</Text>
				</View>
			</View>
		</Pressable>
	);
}

export default ListItem;

const styles = StyleSheet.create({
	rootContainer: {
		width: '100%',
		padding: 8,
		alignItems: 'center'
	},
	mainContentContainer: {
		flexDirection: 'row'
	},
	textContainer: {
		flex: 1,
		flexGrow: 1,
		justifyContent: 'center'
	},
	smallText: {
		textAlign: 'center',
		fontSize: 14,
		color: Colors.gray500
	},
	text1: {
		fontSize: 28
	},
	text2: {
		fontSize: 28
	},
	imageContainer: {
		justifyContent: 'center'
	},
	image: {
		width: 65,
		height: 65,
		marginRight: 8
	}
});
