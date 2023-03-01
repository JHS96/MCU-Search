import { useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

function HomeScreen({ navigation }) {
	const [fontsLoaded] = useFonts({
		'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
		'roboto-bold-italic': require('../assets/fonts/Roboto-BoldItalic.ttf'),
		'roboto-italic': require('../assets/fonts/Roboto-Italic.ttf'),
		'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf')
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	function fetchRandomCharacterHandler() {
		navigation.navigate('Character', { randomCharacter: true });
	}

	return (
		<View onLayout={onLayoutRootView}>
			<Text>Home Screen - Please improve me...</Text>
			<Button title='Random Character' onPress={fetchRandomCharacterHandler} />
		</View>
	);
}

export default HomeScreen;
