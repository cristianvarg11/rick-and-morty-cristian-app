import EditEpisodeForm from "@/components/forms/episode-form/edit/EditEpisodeForm";
import GeneralLayout from "@/layouts/GeneralLayout";
import { useRouter } from "next/router";

export default function EpisodeEditPage() {
  const router = useRouter();
  const { id } = router.query;
  const episodeId = id ? Number(id[0]) : undefined;

  return (
    <GeneralLayout>
      <EditEpisodeForm episodeId={episodeId} />
    </GeneralLayout>
  );
}
