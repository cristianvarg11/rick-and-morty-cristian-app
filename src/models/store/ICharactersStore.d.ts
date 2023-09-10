import { NextRouter } from "next/router";
import { Character } from "./ICharacters";

export interface ICharactersStore {
  characters: Character[]; // The original characters from api
  appenedCharacters: Character[]; // The characters that we made
  editedCharacters: Character[]; // Only the characters edited info (in function of the originals)
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  filterName: string;
}

/**
 * Interface for characters store actions
 */
export interface ICharactersStoreActions {
  //-- gets
  getCharacters: (
    currentPage: ICharactersStore["currentPage"],
    filter: string
  ) => void;

  //-- creations
  createCharacter: (characterInfo: Character, router: NextRouter) => void;
  editCharacter: (
    originalCharacterInfo: Character | undefined,
    editedCharacterInfo: Character,
    router: NextRouter
  ) => void;

  //-- pagination
  nextPage: (
    currentPage: ICharactersStore["currentPage"],
    totalPages: ICharactersStore["totalPages"]
  ) => void;
  prevPage: (currentPage: ICharactersStore["currentPage"]) => void;
}
