import { Episode } from "../IEpisodes";

export interface IEpisodesStore {
  episodes: Episode[];
  editedEpisodes: Episode[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  filterName: string;
}

export interface IEpisodesStoreActions {
  //-- gets
  getEpisodes: (
    currentPage: IEpisodesStore["currentPage"],
    filter: string
  ) => void;

  //-- creations
  editEpisode: (
    originalEpisodeInfo: Episode | undefined,
    editedEpisodeInfo: Episode,
    router: NextRouter
  ) => void;

  //-- pagination
  nextPage: (
    currentPage: IEpisodesStore["currentPage"],
    totalPages: IEpisodesStore["totalPages"]
  ) => void;
  prevPage: (currentPage: IEpisodesStore["currentPage"]) => void;
}
