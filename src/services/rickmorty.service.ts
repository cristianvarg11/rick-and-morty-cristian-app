import { Character, ICharactersResponse } from "@/models/ICharacters";
import { AxiosResponse } from "axios";
import { Episode, IEpisodesResponse } from "@/models/IEpisodes";
import { IGetAllServicesParams } from "@/models/IGetAllServices";
import { http } from "./http.service";

const charactersUrl = "https://rickandmortyapi.com/api/character";
const episodesUrl = "https://rickandmortyapi.com/api/episode";

export const getAllCharacters = ({
  page,
  filter,
}: IGetAllServicesParams): Promise<ICharactersResponse> => {
  return new Promise((resolve, reject) => {
    http
      .get<never, AxiosResponse<ICharactersResponse>>(
        `${charactersUrl}/?page=${page}&name=${filter ?? ""}`
      )
      .then((charactersResponse) => {
        resolve(charactersResponse.data);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

export const getCharacterById = (characterId: number): Promise<Character> => {
  return new Promise((resolve, reject) => {
    http
      .get<never, AxiosResponse<Character>>(`${charactersUrl}/${characterId}`)
      .then((characterResponse) => {
        resolve(characterResponse.data);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

export const getAllEpisodes = ({
  page,
  filter,
}: IGetAllServicesParams): Promise<IEpisodesResponse> => {
  return new Promise((resolve, reject) => {
    http
      .get<never, AxiosResponse<IEpisodesResponse>>(
        `${episodesUrl}/?page=${page}&name=${filter ?? ""}`
      )
      .then((episodesResponse) => {
        resolve(episodesResponse.data);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

export const getEpisodeById = (episodeId: number): Promise<Episode> => {
  return new Promise((resolve, reject) => {
    http
      .get<never, AxiosResponse<Episode>>(`${episodesUrl}/${episodeId}`)
      .then((episodeResponse) => {
        resolve(episodeResponse.data);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};
