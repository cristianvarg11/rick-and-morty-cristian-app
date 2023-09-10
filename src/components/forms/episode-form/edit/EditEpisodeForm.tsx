import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Episode } from "@/models/IEpisodes";
import { useSetEpisodeFormInfo } from "@/utils/hooks/episodes/useSetEpisodeFormInfo";
import { useGetEpisodeById } from "@/utils/hooks/episodes/useGetEpisodeById";
import { useEpisodesStore } from "@/store/EpisodesStore";

interface ICharacterFormProps {
  episodeId: number | undefined;
}

export default function EditEpisodeForm(props: ICharacterFormProps) {
  const { episodeId } = props;

  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<Episode>();
  const { editEpisode } = useEpisodesStore.getState();
  const { episodeApiInfo } = useGetEpisodeById(episodeId);

  useSetEpisodeFormInfo({ episodeApiInfo, reset, episodeId });

  return (
    <div className="m-6">
      <h1 className="my-5 text-3xl font-bold">Edit episode form</h1>

      <form
        className="grid"
        onSubmit={handleSubmit((formData) => {
          editEpisode(episodeApiInfo, formData, router);
        })}
      >
        {/*name*/}
        <Input
          className="m-3"
          {...register("name", { required: true })}
          placeholder="Name"
        />

        {/*episode code*/}
        <Input
          className="m-3"
          {...register("episode", { required: true })}
          placeholder="Episode code"
        />

        {/*air date*/}
        <Input
          className="m-3"
          {...register("air_date")}
          placeholder="Air date"
        />

        {/*referential input id*/}
        {episodeId && (
          <Input
            className="m-3"
            {...register("id")}
            placeholder="id"
            type="hidden"
            value={episodeId}
          />
        )}

        <Button type="submit" className="my-6 max-w-xl">
          Submit
        </Button>
      </form>
    </div>
  );
}
