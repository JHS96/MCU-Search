import { useEffect, useCallback } from 'react';

import ScreenTemplate from '../components/hoc/ScreenTemplate';
import Details from '../components/details/Details';
import CharacterDetails from '../components/details/CharacterDetails';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorDisplay from '../components/ErrorDisplay';
import {
	useFetchRandomCharacterQuery,
	useFetchCharacterByIdQuery
} from '../features/characters/charactersApiSlice';
import { extractedAttributionURL } from '../util/utilityFunctions';
import Colors from '../constants/colors';

function CharacterScreen({ route, navigation }) {
	// If route has a randomCharacter=true param, automatically fetch and display random character
	let skip = true;

	if (route.params?.randomCharacter) {
		skip = false;
	}

	const applicableHook = route.params?.randomCharacter
		? useFetchRandomCharacterQuery(null, {
				skip: skip,
				refetchOnMountOrArgChange: !skip
		  })
		: useFetchCharacterByIdQuery(route.params.id);

	const { data, isLoading, isError, isSuccess, refetch } = applicableHook;

	// If displaying random character, change header title to "Random Character"
	useEffect(() => {
		if (route.params?.randomCharacter) {
			navigation.setOptions({
				title: 'Random Character'
			});
		}

		// If there is an error, change header title to "Error"
		if (isError) {
			navigation.setOptions({ title: 'Error' });
		}
	}, [navigation, isError]);

	const refetchCharacterHandler = useCallback(() => {
		refetch();
	}, []);

	if (isLoading) {
		return <LoadingSpinner size={64} color={Colors.secondary800} />;
	}

	if (isError) {
		return <ErrorDisplay />;
	}

	if (isSuccess) {
		const attrURL = extractedAttributionURL(data.attributionHTML);

		return (
			<ScreenTemplate headerPadding={true}>
				<Details
					imageSource={
						data.data.results[0].thumbnail.path +
						'/landscape_xlarge.' +
						data.data.results[0].thumbnail.extension
					}
					heading={data.data.results[0].name}
					attributionText={data.attributionText}
					attributionURL={attrURL}
					refetch={refetchCharacterHandler}
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
}

export default CharacterScreen;
