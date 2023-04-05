import { createContext, useState } from 'react';

export const CharacterContext = createContext({
	selectedCharacterId: '',
	setSelectedCharacterId: id => {},
	featuredInDetails: {
		numComics: 0,
		numSeries: 0,
		numStories: 0,
		numEvents: 0
	},
	setFeaturedInDetails: ({ numComics, numSeries, numStories, numEvents }) => {}
});

function CharacterContextProvider({ children }) {
	const [id, setId] = useState('');
	const [featuredIn, setFeaturedIn] = useState({
		numComics: 0,
		numSeries: 0,
		numStories: 0,
		numEvents: 0
	});

	function setSelectedCharacterId(characterId) {
		setId(characterId);
	}

	function setFeaturedInDetails({
		numComics,
		numSeries,
		numStories,
		numEvents
	}) {
		setFeaturedIn({
			numComics,
			numSeries,
			numStories,
			numEvents
		});
	}

	const value = {
		selectedCharacterId: id,
		setSelectedCharacterId: setSelectedCharacterId,
		featuredInDetails: featuredIn,
		setFeaturedInDetails: setFeaturedInDetails
	};

	return (
		<CharacterContext.Provider value={value}>
			{children}
		</CharacterContext.Provider>
	);
}

export default CharacterContextProvider;
