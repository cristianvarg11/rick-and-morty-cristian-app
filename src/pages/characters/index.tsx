import CharactersTable from "@/components/tables/characters-table/CharactersTable";
import NewCharactersTable from "@/components/tables/characters-table/NewCharactersTable";
import GeneralLayout from "@/layouts/GeneralLayout";
import { Button } from "@/components/ui/button";
import { useCharactersStore } from "@/store/CharactersStore";
import { useGetAllCharacters } from "@/utils/hooks/character/useGetAllCharacters";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CharactersPage() {
  const router = useRouter();
  const [appenedTable, setAppenedTable] = useState<boolean>(false);

  const [isLoading, filterName] = useCharactersStore((state) => [
    state.isLoading,
    state.filterName,
  ]);

  //-- Fetch all characters from api
  useGetAllCharacters(filterName);

  return (
    <GeneralLayout>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <header className="grid grid-cols-2">
            <Button
              onClick={() => setAppenedTable(!appenedTable)}
              className="m-5"
            >
              Change tables
            </Button>

            <Button onClick={() => router.push("/character")} className="m-5">
              Create Character
            </Button>
          </header>

          {appenedTable ? <NewCharactersTable /> : <CharactersTable />}
        </>
      )}
    </GeneralLayout>
  );
}
