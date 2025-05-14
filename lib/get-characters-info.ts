
import { getClient } from "@/lib/apollo-client";
import { GET_CHARACTER } from "@/lib/queries";

export interface Character {
    id?: string;
    name?: string;
    status?: string;
    species?: string;
    image?: string;
    type?: string;
    gender?: string;
    episode?: Array<Episode>;
    origin?: {
        name: string;
    };
    location?: {
        name: string;
    };
}

export interface Episode {
    id?: string;
    name?: string;
    episode?: string;
}


interface CharacterQueryResult {
    character: Character;
}

async function getCharacterInfo(id: string) {
    const { data: { character: { name, image, origin, episode, location, gender, species, status } = {} } = {} } =
        await getClient().query<CharacterQueryResult>({
            query: GET_CHARACTER,
            variables: { id },
            context: {
                fetchOptions: {
                    next: { revalidate: 3600 },
                },
            },
        });

    return {
        name,
        image,
        origin,
        episode,
        location,
        species,
        gender,
        status,
    };
}

export default getCharacterInfo;