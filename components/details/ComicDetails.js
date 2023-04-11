import { View } from 'react-native';

import ListItem from './ListItem';

function ComicDetails({ title, issueNumber, format, pageCount }) {
	return (
		<View>
			<ListItem
				extraStyles={{
					text1: { fontSize: 20, fontFamily: 'roboto-bold' },
					text2: { fontSize: 20, fontFamily: 'roboto-italic' }
				}}
				isNotPressable={true}
				text1='Title:'
				text2={title}
			/>
			<ListItem
				extraStyles={{
					text1: { fontSize: 20, fontFamily: 'roboto-bold' },
					text2: { fontSize: 20, fontFamily: 'roboto-italic' }
				}}
				isNotPressable={true}
				text1='Issue Number:'
				text2={issueNumber}
			/>
			<ListItem
				extraStyles={{
					text1: { fontSize: 20, fontFamily: 'roboto-bold' },
					text2: { fontSize: 20, fontFamily: 'roboto-italic' }
				}}
				isNotPressable={true}
				text1='Format:'
				text2={format}
			/>
			<ListItem
				extraStyles={{
					text1: { fontSize: 20, fontFamily: 'roboto-bold' },
					text2: { fontSize: 20, fontFamily: 'roboto-italic' }
				}}
				isNotPressable={true}
				text1='Page Count:'
				text2={pageCount}
			/>
		</View>
	);
}

export default ComicDetails;
