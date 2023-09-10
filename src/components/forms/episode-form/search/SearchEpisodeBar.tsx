import { Input } from "@/components/ui/input";
import { useEpisodesStore } from "@/store/EpisodesStore";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export interface IInputSearch {
  search: string;
}

//--- Search bar component
export default function SearchEpisodeBar() {
  const getEpisodes = useEpisodesStore((state) => state.getEpisodes);
  const { setState } = useEpisodesStore;

  const { watch, register, handleSubmit } = useForm<IInputSearch>();

  const handleSubmitSearch = (searchForm: IInputSearch) => {
    getEpisodes(1, searchForm.search);
  };

  const search = watch("search");

  useEffect(() => {
    setState({ filterName: search, currentPage: 1 });
  }, [search, setState]);

  return (
    <div className="my-5 grid max-w-lg">
      <form onSubmit={handleSubmit((formData) => handleSubmitSearch(formData))}>
        <Input {...register("search")} placeholder="Search by episode name" />
      </form>
    </div>
  );
}
