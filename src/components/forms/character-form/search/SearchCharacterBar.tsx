import { Input } from "@/components/ui/input";
import { useCharactersStore } from "@/store/CharactersStore";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export interface IInputSearch {
  search: string;
}

//--- Search bar component
export default function SearchCharacterBar() {
  const getCharacters = useCharactersStore((state) => state.getCharacters);
  const { setState } = useCharactersStore;

  const { watch, register, handleSubmit } = useForm<IInputSearch>();

  const handleSubmitSearch = (searchForm: IInputSearch) => {
    getCharacters(1, searchForm.search);
  };

  const search = watch("search");

  useEffect(() => {
    setState({ filterName: search, currentPage: 1 });
  }, [search, setState]);

  return (
    <div className="my-5 grid max-w-lg">
      <form onSubmit={handleSubmit((formData) => handleSubmitSearch(formData))}>
        <Input {...register("search")} placeholder="Search by character name" />
      </form>
    </div>
  );
}
