import {
  IEpisodesStore,
  IEpisodesStoreActions,
} from "@/models/store/IEpisodesStore";
import { editEpisodeHelper } from "@/utils/helpers/episodes/EpisodesCreationHelpers";
import {
  getAllEpisodesStoreHelper,
  paginationHelper,
} from "@/utils/helpers/episodes/EpisodesStoreHelpers";
import { create } from "zustand";

export const useEpisodesStore = create<IEpisodesStore & IEpisodesStoreActions>(
  (_set) => {
    return {
      episodes: [],
      editedEpisodes: [],
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

      //-- Get episodes
      getEpisodes: (currentPage, filter) => {
        getAllEpisodesStoreHelper(currentPage, filter);
      },

      //-- Edit episode
      editEpisode: (originalEpisodeInfo, editedEpisodeInfo, router) => {
        editEpisodeHelper(originalEpisodeInfo, editedEpisodeInfo, router);
      },
    };
  }
);
