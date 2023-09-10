import CreateUpdateCharacterForm from "@/components/forms/character-form/createUpdate/CreateUpdateCharacterForm";
import GeneralLayout from "@/layouts/GeneralLayout";
import { useRouter } from "next/router";

export default function CharacterEditPage() {
  const router = useRouter();
  const { id } = router.query;
  const characterId = id ? Number(id[0]) : undefined;

  return (
    <GeneralLayout>
      <CreateUpdateCharacterForm characterId={characterId} />
    </GeneralLayout>
  );
}
