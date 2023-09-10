import { Character } from "@/models/ICharacters";
import { useEffect } from "react";
import { UseFormReset } from "react-hook-form";

interface ICharacterSetFormInfoHook {
  characterApiInfo: Character | undefined;
  characterId: number | undefined;
  reset: UseFormReset<Character>;
}

/**
 * Custom Hook to set the character info into form if this info exist
 */
export const useSetCharacterFormInfo = ({
  characterApiInfo,
  characterId,
  reset,
}: ICharacterSetFormInfoHook) => {
  useEffect(() => {
    if (characterId && characterApiInfo) {
      reset({
        name: characterApiInfo.name,
        type: characterApiInfo.type,
        gender: characterApiInfo.gender,
        status: characterApiInfo.status,
        species: characterApiInfo.species,
      });
    }
  }, [reset, characterId, characterApiInfo]);
};
