import { useEffect } from 'react';
import { View, Text } from 'react-native';

import ScreenTemplate from '../components/hoc/ScreenTemplate';
import Details from '../components/details/Details';
import CharacterDetails from '../components/details/CharacterDetails';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { useFetchRandomCharacterQuery } from '../features/characters/charactersApiSlice';
import { extractedAttributionURL } from '../util/utilityFunctions';
import Colors from '../constants/colors';

function CharacterScreen({ route, navigation }) {
	let skip = true;

	if (route.params?.randomCharacter) {
		skip = false;
	}

	const { data, isFetching, isError, isSuccess } = useFetchRandomCharacterQuery(
		null,
		{
			skip: skip,
			refetchOnMountOrArgChange: !skip
		}
	);

	useEffect(() => {
		if (route.params?.randomCharacter) {
			navigation.setOptions({
				title: 'Random Character'
			});
		}
	}, []);

	if (isFetching) {
		return <LoadingSpinner size={64} color={Colors.secondary800} />;
	}

	// TODO - Implement ErrorScreen
	if (isError) {
		console.log('error!!!');
		return (
			<View>
				<Text>Error...</Text>
			</View>
		);
	}

	if (isSuccess) {
		const attrURL = extractedAttributionURL(data.attributionHTML);

		return (
			<ScreenTemplate headerPadding={true}>
				<Details
					imageSource={
						data.data.results[0].thumbnail.path + '/landscape_xlarge.jpg'
					}
					heading={data.data.results[0].name}
					attributionText={data.attributionText}
					attributionURL={attrURL}
				>
					<CharacterDetails
						description={data.data.results[0].description}
						comics={data.data.results[0].comics}
						series={data.data.results[0].series}
						stories={data.data.results[0].stories}
						events={data.data.results[0].events}
					/>
				</Details>
			</ScreenTemplate>
		);
	}

	// TODO - Display details of character chosen by user
	return (
		<View>
			<Text>Not Random</Text>
		</View>
	);
}

export default CharacterScreen;
