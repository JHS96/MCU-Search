import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { md5Hash, randomInteger } from '../../util/utilityFunctions';
import { BASE_URL, PUBLIC_KEY } from '@env';

const timeStamp = Date.now();

export const charactersApiSlice = createApi({
	reducerPath: 'characterApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL
	}),
	endpoints(builder) {
		return {
			fetchRandomCharacter: builder.query({
				query() {
					// Choose 1 random character anywhere from the 1st to the last (currently 1562 in database)
					const min = 1;
					const max = 1562; // Number of characters currently in database
					const rndCharNum = randomInteger(min, max);

					return `/characters?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${md5Hash(
						timeStamp
					)}&limit=1&offset=${rndCharNum - 1}`; // Set offset to rndCharNum minus 1 as arrays are zero based
				}
			}),
			searchCharacters: builder.query({
				query(searchParam) {
					return `/characters?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${md5Hash(
						timeStamp
					)}&nameStartsWith=${searchParam}&limit=20`;
				}
			})
		};
	}
});

export const { useFetchRandomCharacterQuery, useSearchCharactersQuery } =
	charactersApiSlice;
