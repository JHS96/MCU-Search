import { View, Text, StyleSheet } from 'react-native';

function DetailsListItem({ text1, text2, extraStyles }) {
	return (
		<View style={extraStyles?.outer}>
			<Text style={[styles.text1, extraStyles?.text1]}>
				{text1} <Text style={[styles.text2, extraStyles?.text2]}>{text2}</Text>
			</Text>
		</View>
	);
}

export default DetailsListItem;

const styles = StyleSheet.create({
	text1: {
		fontSize: 20
	},
	text2: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});
