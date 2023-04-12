import { View, Text, StyleSheet } from 'react-native';

import ScreenTemplate from '../components/hoc/ScreenTemplate';
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import Details from '../components/details/Details';
import ComicDetails from '../components/details/ComicDetails';
import SeriesDetails from '../components/details/SeriesDetails';
import StoryDetails from '../components/details/StoryDetails';
import EventDetails from '../components/details/EventDetails';
import { useFetchComicByIdQuery } from '../features/comics/comicsApiSlice';
import { useFetchSeriesByIdQuery } from '../features/series/seriesApiSlice';
import { useFetchStoryByIdQuery } from '../features/stories/storiesApiSlice';
import { useFetchEventByIdQuery } from '../features/events/eventsApiSlice';
import { extractedAttributionURL } from '../util/utilityFunctions';
import Colors from '../constants/colors';

function FeaturedInDetailsScreen({ route }) {
	let applicableHook;

	if (route.params.featuredInType === 'comics')
		applicableHook = useFetchComicByIdQuery(route.params.id);
	else if (route.params.featuredInType === 'series') {
		applicableHook = useFetchSeriesByIdQuery(route.params.id);
	} else if (route.params.featuredInType === 'stories') {
		applicableHook = useFetchStoryByIdQuery(route.params.id);
	} else if (route.params.featuredInType === 'events') {
		applicableHook = useFetchEventByIdQuery(route.params.id);
	}

	const { data, isLoading, isSuccess, isError } = applicableHook;

	if (isLoading) {
		return <LoadingSpinner size={64} color={Colors.secondary800} />;
	}

	if (isError) {
		return <ErrorDisplay />;
	}

	if (isSuccess) {
		const attrURL = extractedAttributionURL(data.attributionHTML);

		let info;
		if (route.params.featuredInType === 'comics') {
			info = (
				<ComicDetails
					title={data.data.results[0].title}
					issueNumber={data.data.results[0].issueNumber}
					format={data.data.results[0].format}
					pageCount={data.data.results[0].pageCount}
					detailsURL={data.data.results[0].urls[0].url}
				/>
			);
		} else if (route.params.featuredInType === 'series') {
			info = (
				<SeriesDetails
					title={data.data.results[0].title}
					startYear={data.data.results[0].startYear}
					endYear={data.data.results[0].endYear}
					rating={
						data.data.results[0].rating
							? data.data.results[0].rating
							: 'Not available'
					}
					detailsURL={data.data.results[0].urls[0].url}
				/>
			);
		} else if (route.params.featuredInType === 'stories') {
			const storyType =
				data.data.results[0].type.charAt(0).toUpperCase() +
				data.data.results[0].type.slice(1);

			info = (
				<StoryDetails title={data.data.results[0].title} type={storyType} />
			);
		} else if (route.params.featuredInType === 'events') {
			info = (
				<EventDetails
					title={data.data.results[0].title}
					detailsURL={data.data.results[0].urls[0].url}
				/>
			);
		}

		return (
			<ScreenTemplate headerPadding={true}>
				<Details
					imageSource={
						data.data.results[0].thumbnail &&
						data.data.results[0].thumbnail.path +
							'/landscape_xlarge.' +
							data.data.results[0].thumbnail.extension
					}
					heading={data.data.results[0].title}
					attributionText={data.attributionText}
					attributionURL={attrURL}
				>
					<View>
						<Text style={styles.descriptionText}>
							{!data.data.results[0].description
								? 'No description available'
								: data.data.results[0].description}
						</Text>
					</View>

					<View>{info}</View>
				</Details>
			</ScreenTemplate>
		);
	}
}

export default FeaturedInDetailsScreen;

const styles = StyleSheet.create({
	descriptionText: {
		paddingVertical: 8,
		fontSize: 18,
		fontFamily: 'roboto-regular'
	}
});
