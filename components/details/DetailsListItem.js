import { View, Text, Pressable, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function DetailsListItem({ text1, text2, extraStyles }) {
	return (
		<Pressable
			android_ripple={{ color: Colors.primary600 }}
			style={[styles.container, extraStyles?.container]}
		>
			<Text style={[styles.text1, extraStyles?.text1]}>
				{text1} <Text style={[styles.text2, extraStyles?.text2]}>{text2}</Text>
			</Text>
		</Pressable>
	);
}

export default DetailsListItem;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		padding: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	text1: {
		fontSize: 28
	},
	text2: {
		fontSize: 28
	}
});
