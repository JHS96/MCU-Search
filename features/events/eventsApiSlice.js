import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { md5Hash } from '../../util/utilityFunctions';
import { BASE_URL, PUBLIC_KEY } from '@env';

const timeStamp = Date.now();

export const eventsApiSlice = createApi({
	reducerPath: 'eventsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL
	}),
	endpoints: build => ({
		fetchEventsByCharacterId: build.query({
			query: ({ page, perPage, characterId }) => {
				return `/characters/${characterId}/events?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${md5Hash(
					timeStamp
				)}&offset=${(page - 1) * perPage}&limit=${perPage}`;
			}
		}),
		fetchEventById: build.query({
			query: eventId => {
				return `/events/${eventId}?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${md5Hash(
					timeStamp
				)}`;
			}
		})
	})
});

export const { useFetchEventsByCharacterIdQuery, useFetchEventByIdQuery } =
	eventsApiSlice;
