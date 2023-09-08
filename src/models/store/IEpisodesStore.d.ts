import { Episode } from "../IEpisodes";

export interface IEpisodesStore {
  characters: Episode[];
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
}
