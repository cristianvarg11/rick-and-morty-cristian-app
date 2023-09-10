import { Input } from "@/components/ui/input";
import { useCharactersStore } from "@/store/CharactersStore";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Character, Gender, Species, Status } from "@/models/ICharacters";
import { Button } from "@/components/ui/button";
import { useGetCharacterById } from "@/utils/hooks/character/useGetCharacterById";
import { useSetCharacterFormInfo } from "@/utils/hooks/character/useSetCharacterFormInfo";

interface ICharacterFormProps {
  characterId: number | undefined;
}

export default function CreateUpdateCharacterForm(props: ICharacterFormProps) {
  const { characterId } = props;

  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<Character>();
  const { createCharacter, editCharacter } = useCharactersStore.getState();
  const { characterApiInfo } = useGetCharacterById(characterId);
  useSetCharacterFormInfo({ characterApiInfo, reset, characterId });

  const species = Object.values(Species);
  const genders = Object.values(Gender);
  const status = Object.values(Status);

  return (
    <div className="m-6">
      <form
        className="grid"
        onSubmit={handleSubmit((formData) => {
          characterId
            ? editCharacter(characterApiInfo, formData, router)
            : createCharacter(formData, router);
        })}
      >
        {/*name*/}
        <Input
          className="m-3"
          {...register("name", { required: true })}
          placeholder="Name"
        />

        {/*type*/}
        <Input className="m-3" {...register("type")} placeholder="Type" />

        {/*referential input id*/}
        {characterId && (
          <Input
            className="m-3"
            {...register("id")}
            placeholder="id"
            type="hidden"
            value={characterId}
          />
        )}

        {/*Origin*/}
        {!characterId && (
          <Input
            className="m-3"
            {...register("origin", { required: true })}
            placeholder="Origin"
          />
        )}

        {/*gender*/}
        <select
          {...register("gender")}
          className="m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Gender</option>
          {genders.map((gender, idx) => (
            <option key={idx} value={gender}>
              {gender}
            </option>
          ))}
        </select>

        {/*status*/}
        <select
          {...register("status")}
          className="m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Status</option>
          {status.map((sts, idx) => (
            <option key={idx} value={sts}>
              {sts}
            </option>
          ))}
        </select>

        {/*species*/}
        <select
          {...register("species")}
          className="m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Species</option>s
          {species.map((sps, idx) => (
            <option key={idx} value={sps}>
              {sps}
            </option>
          ))}
        </select>

        <Button type="submit" className="my-6 max-w-xl">
          Submit
        </Button>
      </form>
    </div>
  );
}
