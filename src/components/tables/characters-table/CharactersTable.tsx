import SearchCharacterBar from "@/components/forms/character-form/search/SearchCharacterBar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCharactersStore } from "@/store/CharactersStore";
import { useRouter } from "next/router";

const tableHeaders = [
  "Name",
  "Status",
  "Species",
  "Type",
  "Gender",
  "Origin",
  "Image",
  "Action",
];

export default function CharactersTable() {
  const router = useRouter();
  const { nextPage, prevPage, characters, currentPage, totalPages } =
    useCharactersStore.getState();

  return (
    <>
      {/* Search bar*/}
      <SearchCharacterBar />

      {/* Caracters table*/}
      <Table>
        <TableCaption className="justify-items-stretch">
          <Button
            className="m-4"
            onClick={() => {
              prevPage(currentPage);
            }}
          >
            Prev
          </Button>

          <p>{currentPage}</p>

          <Button
            className="m-4"
            onClick={() => {
              nextPage(currentPage, totalPages);
            }}
          >
            Next
          </Button>
        </TableCaption>

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
          {characters.map((character) => (
            <TableRow key={character.id}>
              <TableCell className="font-medium">{character.name}</TableCell>

              <TableCell className="font-medium">{character.status}</TableCell>

              <TableCell className="font-medium">{character.species}</TableCell>

              <TableCell className="font-medium">
                {character.type.length ? character.type : "-"}
              </TableCell>

              <TableCell className="font-medium">{character.gender}</TableCell>

              <TableCell className="font-medium">
                {character.origin.name}
              </TableCell>

              <TableCell className="font-medium">
                <img src={character.image} alt="img" width={80} height={10} />
              </TableCell>

              <TableCell>
                <Button
                  onClick={() => {
                    router.push(`/character/${character.id}`);
                  }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
