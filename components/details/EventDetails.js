import { View, Linking } from 'react-native';

import ListItem from './ListItem';
import Colors from '../../constants/colors';

function EventDetails({ title, detailsURL }) {
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

export default EventDetails;
