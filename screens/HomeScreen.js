import { View, Text, Button } from 'react-native';

import { md5Hash } from '../util/http';

function HomeScreen() {
	return (
		<View>
			<Text>I am a Home Screen</Text>
			<Button title='md5 hash' onPress={() => console.log(md5Hash())} />
		</View>
	);
}

export default HomeScreen;
