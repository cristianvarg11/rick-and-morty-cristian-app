import { Episode } from "@/models/IEpisodes";
import { getEpisodeById } from "@/services/rickmorty.service";
import { useEffect, useState } from "react";

export const useGetEpisodeById = (episodeId: number | undefined) => {
  const [episodeApiInfo, setEpisodeApiInfo] = useState<Episode>();

  useEffect(() => {
    if (episodeId)
      getEpisodeById(episodeId)
        .then((character) => {
          setEpisodeApiInfo(character);
        })
        .catch((err) => {
          console.error(err);
        });
  }, [episodeId]);

  return { episodeApiInfo };
};
