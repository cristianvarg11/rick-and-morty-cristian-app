import { Episode } from "@/models/IEpisodes";
import { useEpisodesStore } from "@/store/EpisodesStore";
import { NextRouter } from "next/router";

/**
 * Helper to edit a episode
 * @param characterInfo the character info (obtained from form)
 * @param router NextRouter instance to redirect after creation
 */
export const editEpisodeHelper = (
  originalEpisodeInfo: Episode | undefined,
  editedEpisodeInfo: Episode,
  router: NextRouter
) => {
  const { setState } = useEpisodesStore;
  const { editedEpisodes } = useEpisodesStore.getState();

  const episodeToSave: Episode = originalEpisodeInfo
    ? {
        ...originalEpisodeInfo,
        name: editedEpisodeInfo.name,
        air_date: editedEpisodeInfo.air_date,
        episode: editedEpisodeInfo.episode,
      }
    : editedEpisodeInfo;

  setState({ editedEpisodes: [...editedEpisodes, episodeToSave] });

  router.push("/episodes");
};
