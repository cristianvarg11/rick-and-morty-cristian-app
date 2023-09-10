import { Character } from "@/models/ICharacters";
import { getCharacterById } from "@/services/rickmorty.service";
import { useEffect, useState } from "react";

export const useGetCharacterById = (characterId: number | undefined) => {
  const [characterApiInfo, setCharacterApiInfo] = useState<Character>();

  useEffect(() => {
    if (characterId)
      getCharacterById(characterId)
        .then((character) => {
          setCharacterApiInfo(character);
        })
        .catch((err) => {
          console.error(err);
        });
  }, [characterId]);

  return { characterApiInfo };
};
