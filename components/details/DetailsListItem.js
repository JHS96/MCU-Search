import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function DetailsListItem({ text1, text2, thumbnailUrl, extraStyles }) {
	return (
		<Pressable
			android_ripple={{ color: Colors.primary600, foreground: true }}
			style={[styles.container, extraStyles?.container]}
		>
			{thumbnailUrl && (
				<View>
					<Image source={{ uri: thumbnailUrl }} style={styles.image} />
				</View>
			)}
			<View style={styles.textContainer}>
				<Text style={[styles.text1, extraStyles?.text1]}>
					{text1}{' '}
					<Text style={[styles.text2, extraStyles?.text2]}>{text2}</Text>
				</Text>
			</View>
		</Pressable>
	);
}

export default DetailsListItem;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		margin: 4,
		flexDirection: 'row',
		alignItems: 'center'
	},
	textContainer: {
		flex: 1,
		flexGrow: 1
	},
	text1: {
		fontSize: 28
	},
	text2: {
		fontSize: 28
	},
	image: {
		width: 65,
		height: 65,
		marginRight: 8
	}
});
