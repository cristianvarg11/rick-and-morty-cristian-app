import { ICharactersResponse, Character } from "./ICharacters";

export interface IRickAndMortyContext {
  characters: Character[];
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
}
