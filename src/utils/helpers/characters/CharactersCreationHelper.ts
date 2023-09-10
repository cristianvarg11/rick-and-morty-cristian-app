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
  const { editedCharacters } = useCharactersStore.getState();

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

  setState({ editedCharacters: [...editedCharacters, characterToSave] });

  router.push("/characters");
};
