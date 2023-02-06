import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	randomCharacters: []
};

const randomCharactersSlice = createSlice({
	name: 'random characters',
	initialState,
	reducers: {
		setRandomCharacters: (state, action) => {
			state.randomCharacters.push(action.payload.randomCharacters);
		}
	}
});

export const { setRandomCharacters } = randomCharactersSlice.actions;
export default randomCharactersSlice.reducer;
