import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DetailsListItem from './DetailsListItem';
import Colors from '../../constants/colors';

function CharacterDetails({ description, comics, series, stories, events }) {
	const navigation = useNavigation();

	return (
		<View>
			<Text style={styles.descriptionText}>
				{description === '' ? 'No description available' : description}
			</Text>

			<Text style={styles.subHeading}>Featured In</Text>

			<DetailsListItem
				onPress={() => navigation.navigate('FeaturedIn', { screen: 'comics' })}
				text1='Comics:'
				text2={comics.available}
				extraStyles={{
					text1: { fontFamily: 'roboto-regular' },
					text2: {
						fontFamily: 'roboto-bold-italic',
						color: Colors.secondary800
					}
				}}
			/>
			<DetailsListItem
				onPress={() => navigation.navigate('FeaturedIn', { screen: 'series' })}
				text1='Series:'
				text2={series.available}
				extraStyles={{
					text1: { fontFamily: 'roboto-regular' },
					text2: {
						fontFamily: 'roboto-bold-italic',
						color: Colors.secondary800
					}
				}}
			/>
			<DetailsListItem
				onPress={() => navigation.navigate('FeaturedIn', { screen: 'stories' })}
				text1='Stories:'
				text2={stories.available}
				extraStyles={{
					text1: { fontFamily: 'roboto-regular' },
					text2: {
						fontFamily: 'roboto-bold-italic',
						color: Colors.secondary800
					}
				}}
			/>
			<DetailsListItem
				onPress={() => navigation.navigate('FeaturedIn', { screen: 'events' })}
				text1='Events:'
				text2={events.available}
				extraStyles={{
					text1: { fontFamily: 'roboto-regular' },
					text2: {
						fontFamily: 'roboto-bold-italic',
						color: Colors.secondary800
					}
				}}
			/>
		</View>
	);
}

export default CharacterDetails;

const styles = StyleSheet.create({
	subHeading: {
		paddingVertical: 12,
		fontSize: 28,
		fontFamily: 'roboto-bold-italic',
		textAlign: 'center',
		textDecorationLine: 'underline'
	},
	descriptionText: {
		paddingVertical: 8,
		fontSize: 18,
		fontFamily: 'roboto-regular'
	}
});
