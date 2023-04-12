import { View, Linking } from 'react-native';

import ListItem from './ListItem';
import Colors from '../../constants/colors';

function SeriesDetails({ title, startYear, endYear, rating, detailsURL }) {
	return (
		<View>
			<ListItem
				extraStyles={{
					text1: { fontSize: 20, fontFamily: 'roboto-bold' },
					text2: { fontSize: 20, fontFamily: 'roboto-italic' }
				}}
				isNotPressable={true}
				text1={'Title:'}
				text2={title}
			/>
			<ListItem
				extraStyles={{
					text1: { fontSize: 20, fontFamily: 'roboto-bold' },
					text2: { fontSize: 20, fontFamily: 'roboto-italic' }
				}}
				isNotPressable={true}
				text1={'Start Year:'}
				text2={startYear}
			/>
			<ListItem
				extraStyles={{
					text1: { fontSize: 20, fontFamily: 'roboto-bold' },
					text2: { fontSize: 20, fontFamily: 'roboto-italic' }
				}}
				isNotPressable={true}
				text1={'End Year:'}
				text2={endYear}
			/>
			<ListItem
				extraStyles={{
					text1: { fontSize: 20, fontFamily: 'roboto-bold' },
					text2: { fontSize: 20, fontFamily: 'roboto-italic' }
				}}
				isNotPressable={true}
				text1={'Rating:'}
				text2={rating}
			/>
			<ListItem
				extraStyles={{
					text2: {
						fontSize: 20,
						fontFamily: 'roboto-bold-italic',
						color: Colors.primary700
					}
				}}
				onPress={() => Linking.openURL(detailsURL)}
				text2={'Tap here for more info...'}
			/>
		</View>
	);
}

export default SeriesDetails;
