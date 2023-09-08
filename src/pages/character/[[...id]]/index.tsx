import { useRouter } from "next/router";

export default function CharacterEditPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>{id ?? "hello"}</h1>
    </>
  );
}
