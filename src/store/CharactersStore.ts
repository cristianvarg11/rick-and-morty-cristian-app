import {
  ICharactersStore,
  ICharactersStoreActions,
} from "@/models/store/ICharactersStore";
import {
  createCharacterHelper,
  editCharacterHelper,
} from "@/utils/helpers/characters/CharactersCreationHelper";
import {
  getAllCharactersStoreHelper,
  paginationHelper,
} from "@/utils/helpers/characters/CharactersStoreHelper";
import { create } from "zustand";

export const useCharactersStore = create<
  ICharactersStore & ICharactersStoreActions
>((_set) => {
  return {
    characters: [],
    appenedCharacters: [],
    editedCharacters: [],
    currentPage: 1,
    totalPages: 0,
    isLoading: false,
    filterName: "",

    //-- Pages control
    nextPage: (currentPage, totalPages) => {
      paginationHelper().nextPage(currentPage, totalPages);
    },

    prevPage: (currentPage) => {
      paginationHelper().prevPage(currentPage);
    },

    //-- Get characters
    getCharacters: (currentPage, filter) => {
      getAllCharactersStoreHelper(currentPage, filter);
    },

    //-- Create character
    createCharacter: (characterInfo, router) => {
      createCharacterHelper(characterInfo, router);
    },

    //-- Edit character
    editCharacter: (originalCharacterInfo, editedCharacterInfo, router) => {
      editCharacterHelper(originalCharacterInfo, editedCharacterInfo, router);
    },
  };
});
