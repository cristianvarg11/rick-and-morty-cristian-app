import SearchCharacterBar from "@/components/forms/character-form/search/SearchCharacterBar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCharactersStore } from "@/store/CharactersStore";

const tableHeaders = ["Name", "Status", "Species", "Type", "Gender", "Origin"];

export default function NewCharactersTable() {
  const { appenedCharacters } = useCharactersStore.getState();

  return (
    <div className="mx-20">
      <h1 className="mt-5 text-3xl font-bold">New Characters</h1>

      {appenedCharacters.length ? (
        <div>
          {/* Search bar*/}
          {/* <SearchCharacterBar /> */}

          {/* Caracters table*/}
          <Table>
            <TableHeader>
              <TableRow>
                {tableHeaders.map((header, idx) => (
                  <TableHead className="w-[100px]" key={idx}>
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {appenedCharacters.map((character, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">
                    {character.name ?? "-"}
                  </TableCell>

                  <TableCell className="font-medium">
                    {character.status ?? ""}
                  </TableCell>

                  <TableCell className="font-medium">
                    {character.species ?? "-"}
                  </TableCell>

                  <TableCell className="font-medium">
                    {character.type.length ? character.type : "-"}
                  </TableCell>

                  <TableCell className="font-medium">
                    {character.gender ?? "-"}
                  </TableCell>

                  <TableCell className="font-medium">
                    {character.origin ?? "-"}
                  </TableCell>

                  {/* <TableCell className="font-medium">
                    <img
                      src={character.image}
                      alt="img"
                      width={80}
                      height={10}
                    />
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <span className="text-lg">No new characters yet</span>
      )}
    </div>
  );
}
