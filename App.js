import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import CharacterScreen from './screens/CharacterScreen';
import ListScreen from './screens/ListScreen';
import FeaturedInListScreen from './screens/FeaturedInListScreen';
import FeaturedInDetailsScreen from './screens/FeaturedInDetailsScreen';
import CharacterContextProvider from './store/context/character-context';
import { store } from './store/store';
import { CharacterContext } from './store/context/character-context';
import Colors from './constants/colors';

const Stack = createNativeStackNavigator();
const BottomTabs = createMaterialBottomTabNavigator();

function FeaturedIn() {
	const characterCtx = useContext(CharacterContext);
	const featuredIn = characterCtx.featuredInDetails;

	return (
		<BottomTabs.Navigator
			backBehavior='history'
			barStyle={{ backgroundColor: Colors.primary600 }}
			shifting={true}
		>
			{featuredIn.numComics > 0 && (
				<BottomTabs.Screen
					name='comics'
					component={FeaturedInListScreen}
					options={{
						tabBarLabel: 'Comics',
						tabBarIcon: ({ tintColor }) => (
							<Ionicons name='book-outline' size={26} color={tintColor} />
						),
						tabBarColor: Colors.danger
					}}
				/>
			)}
			{featuredIn.numSeries > 0 && (
				<BottomTabs.Screen
					name='series'
					component={FeaturedInListScreen}
					options={{
						tabBarLabel: 'Series',
						tabBarIcon: ({ tintColor }) => (
							<Ionicons name='library-outline' size={26} color={tintColor} />
						)
					}}
				/>
			)}
			{featuredIn.numStories > 0 && (
				<BottomTabs.Screen
					name='stories'
					component={FeaturedInListScreen}
					options={{
						tabBarLabel: 'Stories',
						tabBarIcon: ({ tintColor }) => (
							<Ionicons name='newspaper-outline' size={26} color={tintColor} />
						)
					}}
				/>
			)}
			{featuredIn.numEvents > 0 && (
				<BottomTabs.Screen
					name='events'
					component={FeaturedInListScreen}
					options={{
						tabBarLabel: 'Events',
						tabBarIcon: ({ tintColor }) => (
							<Ionicons name='alarm-outline' size={26} color={tintColor} />
						)
					}}
				/>
			)}
		</BottomTabs.Navigator>
	);
}

export default function App() {
	return (
		<Provider store={store}>
			<CharacterContextProvider>
				<NavigationContainer>
					<Stack.Navigator screenOptions={{ headerTransparent: true }}>
						<Stack.Screen name='Home' component={HomeScreen} />
						<Stack.Screen name='Character' component={CharacterScreen} />
						<Stack.Screen name='List' component={ListScreen} />
						<Stack.Screen name='FeaturedIn' component={FeaturedIn} />
						<Stack.Screen
							name='FeaturedInDetails'
							component={FeaturedInDetailsScreen}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</CharacterContextProvider>
		</Provider>
	);
}
