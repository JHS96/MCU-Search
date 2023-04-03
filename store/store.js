import { configureStore } from '@reduxjs/toolkit';

import { charactersApiSlice } from '../features/characters/charactersApiSlice';
import { comicsApiSlice } from '../features/comics/comicsApiSlice';
import { seriesApiSlice } from '../features/series/seriesApiSlice';

export const store = configureStore({
	reducer: {
		[charactersApiSlice.reducerPath]: charactersApiSlice.reducer,
		[comicsApiSlice.reducerPath]: comicsApiSlice.reducer,
		[seriesApiSlice.reducerPath]: seriesApiSlice.reducer
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat([
			charactersApiSlice.middleware,
			comicsApiSlice.middleware,
			seriesApiSlice.middleware
		]);
	}
});
