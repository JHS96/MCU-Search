import { createContext, useState } from 'react';

export const CharacterContext = createContext({
	selectedCharacterId: '',
	setSelectedCharacterId: id => {}
});

function CharacterContextProvider({ children }) {
	const [id, setId] = useState('');

	function setSelectedCharacterId(characterId) {
		setId(characterId);
	}

	const value = {
		selectedCharacterId: id,
		setSelectedCharacterId: setSelectedCharacterId
	};

	return (
		<CharacterContext.Provider value={value}>
			{children}
		</CharacterContext.Provider>
	);
}

export default CharacterContextProvider;
