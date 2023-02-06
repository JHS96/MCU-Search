import { configureStore } from '@reduxjs/toolkit';

import randomCharactersReducer from './randomCharacters';

export const store = configureStore({
	reducer: {
		randomCharacters: randomCharactersReducer
	}
});
