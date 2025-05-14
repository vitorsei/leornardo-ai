import AuthWrapper from "@/components/AuthWrapper";
import CharactersList from "@/components/CharactersList";
import { getClient } from "@/lib/apollo-client";
import { GET_CHARACTERS } from "@/lib/queries";
import { Center, Container, Heading, Spinner } from "@chakra-ui/react";
import { Suspense } from "react";

interface Props {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}

async function getCharacters(page: number) {
  const { data } = await getClient().query({
    query: GET_CHARACTERS,
    variables: { page },
    context: {
      fetchOptions: {
        next: { revalidate: 3600 }, // Move revalidation to fetch level
      },
    },
  });
  return data;
}

export default async function CharactersPage(props: Props) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page || 1);
  const data = await getCharacters(page);
  console.log("🚀 Vitor  ~ CharactersPage ~ data:", data);

  return (
    <AuthWrapper>
      <Container py={10} w="full">
        <Heading as="h1" size="xl" mb={6} color="whiteAlpha.900">
          Characters
        </Heading>

        <Suspense
          fallback={
            <Center py={10}>
              <Spinner size="xl" color="brand.500" />
            </Center>
          }
        >
          <CharactersList characters={data?.characters?.results} />
        </Suspense>
      </Container>
    </AuthWrapper>
  );
}
