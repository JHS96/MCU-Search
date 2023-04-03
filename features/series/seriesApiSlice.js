import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { md5Hash } from '../../util/utilityFunctions';
import { BASE_URL, PUBLIC_KEY } from '@env';

const timeStamp = Date.now();

export const seriesApiSlice = createApi({
	reducerPath: 'seriesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL
	}),
	endpoints: build => ({
		fetchSeriesByCharacterId: build.query({
			query: ({ page, perPage, characterId }) => {
				return `/characters/${characterId}/series?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${md5Hash(
					timeStamp
				)}&offset=${(page - 1) * perPage}&limit=${perPage}`;
			}
		})
	})
});

export const { useFetchSeriesByCharacterIdQuery } = seriesApiSlice;
