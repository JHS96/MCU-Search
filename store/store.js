import { configureStore } from '@reduxjs/toolkit';

import { charactersApiSlice } from '../features/characters/charactersApiSlice';

export const store = configureStore({
	reducer: {
		[charactersApiSlice.reducerPath]: charactersApiSlice.reducer
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat([charactersApiSlice.middleware]);
	}
});
