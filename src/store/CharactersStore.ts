import {
  ICharactersStore,
  ICharactersStoreActions,
} from "@/models/store/ICharactersStore";
import { getAllCharactersStoreHelper } from "@/utils/helpers/CharactersStoreHelper";
import { create } from "zustand";

export const useCharactersStore = create<
  ICharactersStore & ICharactersStoreActions
>((set) => {
  return {
    characters: [],
    currentPage: 1,
    totalPages: 0,
    isLoading: false,
    filterName: "",

    //-- Pages control
    nextPage: (currentPage, totalPages) => {
      if (currentPage < totalPages) set({ currentPage: currentPage + 1 });
    },

    prevPage: (currentPage) => {
      if (currentPage > 1) set({ currentPage: currentPage - 1 });
    },

    //-- Get characters
    getCharacters: (currentPage, filter) => {
      getAllCharactersStoreHelper(currentPage, filter);
    },

    //-- Create character
    createCharacter: () => {},

    //-- Edit character
    editCharacter: () => {},
  };
});
