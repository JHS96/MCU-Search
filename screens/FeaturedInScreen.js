import { useContext } from 'react';
import { View, FlatList } from 'react-native';

import ScreenTemplate from '../components/hoc/ScreenTemplate';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorDisplay from '../components/ErrorDisplay';
import DetailsListItem from '../components/details/DetailsListItem';
import { CharacterContext } from '../context/character-context';
import { useFetchComicsByCharacterIdQuery } from '../features/comics/comicsApiSlice';
import Colors from '../constants/colors';

function FeaturedInScreen() {
	const characterCtx = useContext(CharacterContext);
	const characterId = characterCtx.selectedCharacterId;

	const { data, isLoading, isError, isSuccess } =
		useFetchComicsByCharacterIdQuery(characterId);

	if (isLoading) {
		return <LoadingSpinner size={64} color={Colors.secondary800} />;
	}

	if (isError) {
		return <ErrorDisplay />;
	}

	if (isSuccess) {
		return (
			<ScreenTemplate headerPadding={true}>
				<View>
					<FlatList
						data={data.data.results}
						renderItem={({ item }) => {
							return (
								<DetailsListItem
									text1={item.title}
									thumbnailUrl={
										item.thumbnail.path +
										'/standard_medium.' +
										item.thumbnail.extension
									}
								/>
							);
						}}
						keyExtractor={item => item.title}
					/>
				</View>
				 {/* TODO - Add attribution */}
			</ScreenTemplate>
		);
	}
}

export default FeaturedInScreen;
