import { useEpisodesStore } from "@/store/EpisodesStore";
import { useRouter } from "next/router";
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
import SearchEpisodeBar from "@/components/forms/episode-form/search/SearchEpisodeBar";

const tableHeaders = ["Name", "Air date", "Code", "Action"];

export default function EpisodesTable() {
  const router = useRouter();
  const {
    currentPage,
    nextPage,
    prevPage,
    episodes,
    editedEpisodes,
    totalPages,
  } = useEpisodesStore.getState();

  const getEpisodesForTable = () => {
    return episodes.map((episode) => {
      const editedEpisode = editedEpisodes.find(
        (edited) => edited.id === episode.id
      );
      return editedEpisode ? editedEpisode : episode;
    });
  };

  return (
    <div className="mx-20">
      <h1 className="mt-5 text-3xl font-bold">Episodes</h1>

      {/* Search bar*/}
      <SearchEpisodeBar />

      {/* Episodes table*/}
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
          {getEpisodesForTable().map((episode) => (
            <TableRow key={episode.id}>
              <TableCell className="font-medium">{episode.name}</TableCell>

              <TableCell className="font-medium">{episode.air_date}</TableCell>

              <TableCell className="font-medium">{episode.episode}</TableCell>

              <TableCell>
                <Button
                  onClick={() => {
                    router.push(`/episodes/form/${episode.id}`);
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
