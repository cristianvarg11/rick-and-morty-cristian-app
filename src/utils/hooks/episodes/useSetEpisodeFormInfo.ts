import { Episode } from "@/models/IEpisodes";
import { useEffect } from "react";
import { UseFormReset } from "react-hook-form";

interface ICharacterSetFormInfoHook {
  episodeApiInfo: Episode | undefined;
  episodeId: number | undefined;
  reset: UseFormReset<Episode>;
}

/**
 * Custom Hook to set the character info into form if this info exist
 */
export const useSetEpisodeFormInfo = ({
  episodeApiInfo,
  episodeId,
  reset,
}: ICharacterSetFormInfoHook) => {
  useEffect(() => {
    if (episodeId && episodeApiInfo) {
      reset({
        name: episodeApiInfo.name,
        episode: episodeApiInfo.episode,
        air_date: episodeApiInfo.air_date,
      });
    }
  }, [reset, episodeId, episodeApiInfo]);
};
