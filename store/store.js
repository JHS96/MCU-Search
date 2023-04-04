import { configureStore } from '@reduxjs/toolkit';

import { charactersApiSlice } from '../features/characters/charactersApiSlice';
import { comicsApiSlice } from '../features/comics/comicsApiSlice';
import { seriesApiSlice } from '../features/series/seriesApiSlice';
import { storiesApiSlice } from '../features/stories/storiesApiSlice';

export const store = configureStore({
	reducer: {
		[charactersApiSlice.reducerPath]: charactersApiSlice.reducer,
		[comicsApiSlice.reducerPath]: comicsApiSlice.reducer,
		[seriesApiSlice.reducerPath]: seriesApiSlice.reducer,
		[storiesApiSlice.reducerPath]: storiesApiSlice.reducer
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat([
			charactersApiSlice.middleware,
			comicsApiSlice.middleware,
			seriesApiSlice.middleware,
			storiesApiSlice.middleware
		]);
	}
});
