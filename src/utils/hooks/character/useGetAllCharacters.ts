import { useCharactersStore } from "@/store/CharactersStore";
import { useEffect } from "react";

export const useGetAllCharacters = (filterName: string) => {
  const currentPage = useCharactersStore((state) => state.currentPage);
  const getCharacters = useCharactersStore((state) => state.getCharacters);

  useEffect(() => {
    getCharacters(currentPage, filterName);
  }, [currentPage, getCharacters, filterName]);
};
