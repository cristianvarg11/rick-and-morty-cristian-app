import { useEpisodesStore } from "@/store/EpisodesStore";
import { useEffect } from "react";

export const useGetAllEpisodes = (filterName: string) => {
  const currentPage = useEpisodesStore((state) => state.currentPage);
  const getEpisodes = useEpisodesStore((state) => state.getEpisodes);

  useEffect(() => {
    getEpisodes(currentPage, filterName);
  }, [currentPage, getEpisodes, filterName]);
};
