import { Pressable, Text, Linking, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function Attribution({ attributionURL, attributionText }) {
	return (
		<Pressable
			style={styles.attributionContainer}
			onPress={() => Linking.openURL(attributionURL)}
			android_ripple={{ color: Colors.primary600 }}
		>
			<Text style={styles.attributionText}>{attributionText}</Text>
		</Pressable>
	);
}

export default Attribution;

const styles = StyleSheet.create({
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
