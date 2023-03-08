import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import CharacterScreen from './screens/CharacterScreen';
import ListScreen from './screens/ListScreen';
import { store } from './store/store';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerTransparent: true }}>
					<Stack.Screen name='Home' component={HomeScreen} />
					<Stack.Screen name='Character' component={CharacterScreen} />
					<Stack.Screen name='List' component={ListScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
