import { View, Text, StyleSheet } from 'react-native';

function CharacterDetails({ numComics, numSeries, numStories, numEvents }) {
	return (
		<View>
			<Text style={styles.subHeading}>Featured In</Text>

			<Text style={styles.label}>
				Comics: <Text style={styles.count}>{numComics}</Text>
			</Text>
			<Text style={styles.label}>
				Series: <Text style={styles.count}>{numSeries}</Text>
			</Text>
			<Text style={styles.label}>
				Stories: <Text style={styles.count}>{numStories}</Text>
			</Text>
			<Text style={styles.label}>
				Events: <Text style={styles.count}>{numEvents}</Text>
			</Text>
		</View>
	);
}

export default CharacterDetails;

const styles = StyleSheet.create({
	subHeading: {
		fontSize: 24,
		fontWeight: 'bold',
		fontStyle: 'italic',
		textAlign: 'center'
	},
	label: {
		fontSize: 20
	},
	count: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});
