import { Character } from "@/models/ICharacters";
import { IRickAndMortyContext } from "@/models/IRickAndMortyContext";
import { getAllCharacters } from "@/services/rickmorty.service";
import { createContext, useEffect, useState } from "react";

const RickAndMortyContext = createContext<IRickAndMortyContext | undefined>(
  undefined
);

export const RickAndMortyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  //-- Create custom hook
  useEffect(() => {
    loadCharacters(currentPage);
  }, [currentPage]);

  const loadCharacters = (page: number) => {
    getAllCharacters(page)
      .then((charactersResponse) => {
        setCharacters(charactersResponse.results);
        setTotalPages(charactersResponse.info.pages);
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
