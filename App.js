import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider } from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import CharacterScreen from './screens/CharacterScreen';
import ListScreen from './screens/ListScreen';
import FeaturedInScreen from './screens/FeaturedInScreen';
import { store } from './store/store';

const Stack = createNativeStackNavigator();
const BottomTabs = createMaterialBottomTabNavigator();

function FeaturedIn() {
	return (
		<BottomTabs.Navigator>
			<BottomTabs.Screen name='comics' component={FeaturedInScreen} />
			<BottomTabs.Screen name='series' component={FeaturedInScreen} />
			<BottomTabs.Screen name='stories' component={FeaturedInScreen} />
			<BottomTabs.Screen name='events' component={FeaturedInScreen} />
		</BottomTabs.Navigator>
	);
}

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerTransparent: true }}>
					<Stack.Screen name='Home' component={HomeScreen} />
					<Stack.Screen name='Character' component={CharacterScreen} />
					<Stack.Screen name='List' component={ListScreen} />
					<Stack.Screen name='FeaturedIn' component={FeaturedIn} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
