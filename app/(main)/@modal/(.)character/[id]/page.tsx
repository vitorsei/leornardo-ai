import CharacterDetails from "@/components/CharacterDetails";
import Modal from "@/components/Modal";
import getCharacterInfo from "@/lib/get-characters-info";
import { notFound } from "next/navigation";

interface Props {
  params?: Promise<{
    query?: string;
    id?: string;
  }>;
}

export default async function CharacterModalPage(props: Props) {
  const searchParams = await props.params;
  const character = await getCharacterInfo(searchParams?.id || "");

  if (!character) {
    notFound();
  }

  return (
    <Modal>
      <CharacterDetails character={character} />
    </Modal>
  );
}
