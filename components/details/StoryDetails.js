import { View } from 'react-native';

import ListItem from './ListItem';

function StoryDetails({ title, type }) {
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
				text1={'Type:'}
				text2={type}
			/>
		</View>
	);
}

export default StoryDetails;
