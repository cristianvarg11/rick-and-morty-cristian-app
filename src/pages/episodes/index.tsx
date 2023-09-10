import { useEpisodesStore } from "@/store/EpisodesStore";
import { useGetAllEpisodes } from "@/utils/hooks/episodes/useGetAllEpisodes";
import GeneralLayout from "@/layouts/GeneralLayout";
import EpisodesTable from "@/components/tables/episodes-table/EpisodesTable";

export default function EpisodesPages() {
  const [isLoading, filterName] = useEpisodesStore((state) => [
    state.isLoading,
    state.filterName,
  ]);

  //-- Fetch all episodes from api
  useGetAllEpisodes(filterName);

  return (
    <GeneralLayout>
      {isLoading ? <h1>Loading...</h1> : <EpisodesTable />}
    </GeneralLayout>
  );
}
