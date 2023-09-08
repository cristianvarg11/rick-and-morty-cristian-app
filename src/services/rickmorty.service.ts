import { ICharactersResponse } from "@/models/ICharacters";
import { AxiosResponse } from "axios";
import { IEpisodesResponse } from "@/models/IEpisodes";
import { http } from "./http.service";

const charactersUrl = "https://rickandmortyapi.com/api/character";
const episodesUrl = "https://rickandmortyapi.com/api/episode";

export const getAllCharacters = (
  page: number
): Promise<ICharactersResponse> => {
  return new Promise((resolve, reject) => {
    http
      .get<never, AxiosResponse<ICharactersResponse>>(`${charactersUrl}`)
      .then((charactersResponse) => {
        resolve(charactersResponse.data);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

export const getAllEpisodes = (): Promise<IEpisodesResponse> => {
  return new Promise((resolve, reject) => {
    http
      .get<never, AxiosResponse<IEpisodesResponse>>(`${episodesUrl}`)
      .then((episodesResponse) => {
        resolve(episodesResponse.data);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};
