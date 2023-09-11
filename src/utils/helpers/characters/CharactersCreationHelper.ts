import { Character } from "@/models/ICharacters";
import { NextRouter } from "next/router";
import { useCharactersStore } from "@/store/CharactersStore";

/**
 * Helper to create a character
 * @param characterInfo the character info (obtained from form)
 * @param router NextRouter instance to redirect after creation
 */
export const createCharacterHelper = (
  characterInfo: Character,
  router: NextRouter
) => {
  const { setState } = useCharactersStore;
  const { appenedCharacters } = useCharactersStore.getState();

  setState({ appenedCharacters: [...appenedCharacters, characterInfo] });

  router.push("/characters");
};

/**
 * Helper to edit a character
 * @param characterInfo the character info (obtained from form)
 * @param router NextRouter instance to redirect after creation
 */
export const editCharacterHelper = (
  originalCharacterInfo: Character | undefined,
  editedCharacterInfo: Character,
  router: NextRouter
) => {
  const { setState } = useCharactersStore;
  // Obtain a copy updated of editedCharacters from state
  const editedCharacters = useCharactersStore
    .getState()
    .editedCharacters.slice();

  const characterToSave: Character = originalCharacterInfo
    ? {
        ...originalCharacterInfo,
        name: editedCharacterInfo.name,
        status: editedCharacterInfo.status,
        species: editedCharacterInfo.species,
        type: editedCharacterInfo.type,
        gender: editedCharacterInfo.gender,
      }
    : editedCharacterInfo;

  // Verify if already exist this character (passed) in the array
  const characterIndex = editedCharacters.findIndex(
    (character) => character.id === characterToSave.id
  );

  if (characterIndex !== -1) {
    // If already exist, update this
    editedCharacters[characterIndex] = characterToSave;
  } else {
    // Else, append
    editedCharacters.push(characterToSave);
  }

  setState({ editedCharacters });

  router.push("/characters");
};
