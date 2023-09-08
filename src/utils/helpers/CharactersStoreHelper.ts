import { getAllCharacters } from "@/services/rickmorty.service";
import { useCharactersStore } from "@/store/CharactersStore";

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
