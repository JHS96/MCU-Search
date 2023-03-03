import { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import ScreenTemplate from '../components/hoc/ScreenTemplate';
import Button from '../components/ui/Button';
import Colors from '../constants/colors';
import GlobalStyles from '../constants/globalStyles';

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
		<ScreenTemplate headerPadding={true}>
			<View style={styles.rootContainer}>
				<View style={GlobalStyles.headingContainer}>
					<Text style={GlobalStyles.headingText}>
						Home Screen - Please improve me...
					</Text>
				</View>
				<View style={styles.bodyContainer} onLayout={onLayoutRootView}>
					<View style={styles.btnContainer}>
						<Button
							onPress={fetchRandomCharacterHandler}
							rippleColor={Colors.primary300}
							containerStyle={{ width: 200, marginVertical: 6 }}
							textStyle={{ fontSize: 24 }}
						>
							Random Character
						</Button>

						<Button
							onPress={() => {}}
							rippleColor={Colors.primary300}
							containerStyle={{ width: 200, marginVertical: 6 }}
							textStyle={{ fontSize: 24 }}
							mode='flat'
						>
							Search
						</Button>
					</View>
				</View>
			</View>
		</ScreenTemplate>
	);
}

export default HomeScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1
	},
	bodyContainer: {
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	btnContainer: {
		marginTop: 12,
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});
