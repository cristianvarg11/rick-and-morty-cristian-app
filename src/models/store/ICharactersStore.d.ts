import { ICharactersResponse, Character } from "./ICharacters";

export interface ICharactersStore {
  characters: Character[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
	filterName: string
}

export interface ICharactersStoreActions {
  getCharacters: (
    currentPage: ICharactersStore["currentPage"],
    filter: string
  ) => void;

  createCharacter: () => void;
  editCharacter: () => void;

  nextPage: (
    currentPage: ICharactersStore["currentPage"],
    totalPages: ICharactersStore["totalPages"]
  ) => void;
  prevPage: (currentPage: ICharactersStore["currentPage"]) => void;
}
