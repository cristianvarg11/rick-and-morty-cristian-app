import { getAllCharacters } from "@/services/rickmorty.service";
import { useCharactersStore } from "@/store/CharactersStore";

//-- Fetch original characters
export const getAllCharactersStoreHelper = (page: number, filter: string) => {
  const { setState } = useCharactersStore;

  getAllCharacters({ page, filter })
    .then((charactersResponse) => {
      setState({
        characters: charactersResponse.results,
        totalPages: charactersResponse.info.pages,
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
  const { setState } = useCharactersStore;

  const nextPage = (currentPage: number, totalPages: number) => {
    if (currentPage < totalPages) setState({ currentPage: currentPage + 1 });
  };

  const prevPage = (currentPage: number) => {
    if (currentPage > 1) setState({ currentPage: currentPage - 1 });
  };

  return { nextPage, prevPage };
};
