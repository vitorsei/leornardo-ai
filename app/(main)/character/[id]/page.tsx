import CharacterDetails from "@/components/CharacterDetails";
import getCharacterInfo from "@/lib/get-characters-info";
import { Center, Container, Spinner } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface Props {
  params?: Promise<{
    query?: string;
    id?: string;
  }>;
}

export default async function CharacterPage(props: Props) {
  const searchParams = await props.params;
  const character = await getCharacterInfo(searchParams?.id || "");

  if (!character) {
    notFound();
  }

  return (
    <Container py={10}>
      <Suspense
        fallback={
          <Center py={10}>
            <Spinner size="xl" color="brand.500" />
          </Center>
        }
      >
        <CharacterDetails character={character} />
      </Suspense>
    </Container>
  );
}
