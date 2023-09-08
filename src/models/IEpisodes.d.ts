export interface IEpisodesResponse {
  info: Info;
  results: Episode[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}
