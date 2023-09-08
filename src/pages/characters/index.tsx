import CharactersTable from "@/components/tables/characters-table/CharactersTable";
import { useCharactersStore } from "@/store/CharactersStore";
import { useGetAllCharacters } from "@/utils/hooks/useGetAllCharacters";

export default function CharactersPage() {
  const [isLoading, filterName] = useCharactersStore((state) => [
    state.isLoading,
    state.filterName,
  ]);

  useGetAllCharacters(filterName);

  return <>{isLoading ? <h1>Loading...</h1> : <CharactersTable />}</>;
}
