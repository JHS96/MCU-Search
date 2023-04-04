import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { md5Hash } from '../../util/utilityFunctions';
import { BASE_URL, PUBLIC_KEY } from '@env';

const timeStamp = Date.now();

export const storiesApiSlice = createApi({
	reducerPath: 'storiesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL
	}),
	endpoints: build => ({
		fetchStoriesByCharacterId: build.query({
			query: ({ page, perPage, characterId }) => {
				return `/characters/${characterId}/stories?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${md5Hash(
					timeStamp
				)}&offset=${(page - 1) * perPage}&limit=${perPage}`;
			}
		})
	})
});

export const { useFetchStoriesByCharacterIdQuery } = storiesApiSlice;
