import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider>
			<NavigationContainer store={store}>
				<Stack.Navigator>
					<Stack.Screen name='Home' component={HomeScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
