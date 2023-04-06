import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { md5Hash } from '../../util/utilityFunctions';
import { BASE_URL, PUBLIC_KEY } from '@env';

const timeStamp = Date.now();

export const comicsApiSlice = createApi({
	reducerPath: 'comicsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL
	}),
	endpoints: build => ({
		fetchComicsByCharacterId: build.query({
			query: ({ page, perPage, characterId }) => {
				return `/characters/${characterId}/comics?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${md5Hash(
					timeStamp
				)}&offset=${(page - 1) * perPage}&limit=${perPage}`;
			}
		}),
		fetchComicById: build.query({
			query: comicId => {
				return `/comics/${comicId}?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${md5Hash(
					timeStamp
				)}`;
			}
		})
	})
});

export const { useFetchComicsByCharacterIdQuery, useFetchComicByIdQuery } =
	comicsApiSlice;
