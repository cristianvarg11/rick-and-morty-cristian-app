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
import Image from "next/image";
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
  const {
    nextPage,
    prevPage,
    characters,
    editedCharacters,
    currentPage,
    totalPages,
  } = useCharactersStore.getState();

  const getCharactersForTable = () => {
    return characters.map((character) => {
      const editedCharacter = editedCharacters.find(
        (edited) => edited.id === character.id
      );
      return editedCharacter ? editedCharacter : character;
    });
  };

  return (
    <div className="mx-20">
      <h1 className="mt-5 text-3xl font-bold">Original Characters</h1>

      {/* Search bar*/}
      <SearchCharacterBar />

      {/* Caracters table*/}
      <Table>
        <TableCaption className="justify-items-stretch"></TableCaption>

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
          {getCharactersForTable().map((character) => (
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
                <Image
                  src={character.image}
                  alt="img"
                  width={80}
                  height={10}
                  className="rounded-md"
                />
              </TableCell>

              <TableCell>
                <Button
                  onClick={() => {
                    router.push(`/characters/form/${character.id}`);
                  }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex flex-col items-center mb-10">
        <Button
          className=""
          onClick={() => {
            prevPage(currentPage);
          }}
        >
          Prev
        </Button>

        <p>{currentPage}</p>

        <Button
          className=""
          onClick={() => {
            nextPage(currentPage, totalPages);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
