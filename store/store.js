import { configureStore } from '@reduxjs/toolkit';

import { charactersApiSlice } from '../features/characters/charactersApiSlice';
import { comicsApiSlice } from '../features/comics/comicsApiSlice';

export const store = configureStore({
	reducer: {
		[charactersApiSlice.reducerPath]: charactersApiSlice.reducer,
		[comicsApiSlice.reducerPath]: comicsApiSlice.reducer
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat([
			charactersApiSlice.middleware,
			comicsApiSlice.middleware
		]);
	}
});
