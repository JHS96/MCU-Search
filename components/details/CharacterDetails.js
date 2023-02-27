import { View, Text, StyleSheet } from 'react-native';

import DetailsListItem from './DetailsListItem';

function CharacterDetails({ description, comics, series, stories, events }) {
	return (
		<View>
			<Text style={styles.descriptionText}>
				{description === '' ? 'No description available' : description}
			</Text>

			<Text style={styles.subHeading}>Featured In</Text>

			<DetailsListItem text1='Comics:' text2={comics.available} />
			<DetailsListItem text1='Series:' text2={series.available} />
			<DetailsListItem text1='Stories:' text2={stories.available} />
			<DetailsListItem text1='Events:' text2={events.available} />
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
	descriptionText: {
		fontSize: 16
	},
	label: {
		fontSize: 20
	},
	count: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});
