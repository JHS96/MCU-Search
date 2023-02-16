import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { md5Hash, randomInteger } from '../../util/utilityFunctions';
import { BASE_URL, PUBLIC_KEY } from '@env';

const timeStamp = Date.now();
// Choose 1 random character anywhere from the 1st to the last (currently 1562 in database)
const min = 1;
const max = 1562; // Number of characters currently in database
const rndCharNum = randomInteger(min, max);

export const charactersApiSlice = createApi({
	reducerPath: 'characterApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL
	}),
	endpoints(builder) {
		return {
			fetchRandomCharacter: builder.query({
				query() {
					return `/characters?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${md5Hash(
						timeStamp
					)}&limit=1&offset=${rndCharNum - 1}`; // Set offset to rndCharNum minus 1 as arrays are zero based
				}
			})
		};
	}
});

export const { useFetchRandomCharacterQuery } = charactersApiSlice;

// import { createSlice, createAsyncThunk, configureStore } from '@reduxjs/toolkit';

// import { fetchRandomCharacter } from '../actions/characterActions';

// const initialState = {
// 	randomCharacter: {}
// };

// const baseUrl = 'https://gateway.marvel.com/v1/public/';

// const fetchOneRandomCharacter = createAsyncThunk(
// 	'fetchOneRandomCharacter',
// 	console.log('stuff')
// 	// async () => {
// 	// 	const response = fetchRandomCharacter();
// 	// 	console.log('response');
// 	// 	return response;
// 	// }
// );

// const randomCharacterSlice = createSlice({
// 	name: 'randomCharacter',
// 	initialState,
// 	reducers: {
// 		setRandomCharacter: (state, action) => {
// 			state.randomCharacter.push(action.payload.randomCharacter);
// 		}
// 	},
// 	extraReducers: builder => {
// 		builder.addCase(fetchOneRandomCharacter.fulfilled, (state, action) => {
// 			state.randomCharacter = { ...action.payload.randomCharacter };
// 		});
// 	}
// });

// export const { setRandomCharacter } = randomCharacterSlice.actions;
// export default randomCharacterSlice.reducer;
