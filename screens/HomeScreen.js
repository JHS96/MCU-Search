import { View, Text } from 'react-native';

import Details from '../components/details/Details';
import CharacterDetails from '../components/details/CharacterDetails';
import { useFetchRandomCharacterQuery } from '../features/characters/charactersApiSlice';
import { extractedAttributionURL } from '../util/utilityFunctions';

function HomeScreen() {
	const { data, isFetching, isError, isSuccess } =
		useFetchRandomCharacterQuery();

	if (isFetching) {
		return (
			<View>
				<Text>Fetching...</Text>
			</View>
		);
	}

	if (isError) {
		return (
			<View>
				<Text>Error...</Text>
			</View>
		);
	}

	if (isSuccess) {
		const attrURL = extractedAttributionURL(data.attributionHTML);

		return (
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
		);
	}
}

export default HomeScreen;
