import { getAllEpisodes } from "@/services/rickmorty.service";
import { useEpisodesStore } from "@/store/EpisodesStore";

//-- Fetch original characters
export const getAllEpisodesStoreHelper = (page: number, filter: string) => {
  const { setState } = useEpisodesStore;

  getAllEpisodes({ page, filter })
    .then((espisodesResponse) => {
      setState({
        episodes: espisodesResponse.results,
        totalPages: espisodesResponse.info.pages,
      });
      setState({ isLoading: false });
    })
    .catch((err) => {
      setState({ isLoading: false });
      console.error(err);
    });
};

//-- Pagination functions
export const paginationHelper = () => {
  const { setState } = useEpisodesStore;

  const nextPage = (currentPage: number, totalPages: number) => {
    if (currentPage < totalPages) setState({ currentPage: currentPage + 1 });
  };

  const prevPage = (currentPage: number) => {
    if (currentPage > 1) setState({ currentPage: currentPage - 1 });
  };

  return { nextPage, prevPage };
};
