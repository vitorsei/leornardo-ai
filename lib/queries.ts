import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        origin {
          name
          type
        }
        location {
          name
          type
        }
        episode {
          id
          name
          episode
        }
      }
    }
  }
`

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        name
        type
      }
      location {
        name
        type
      }
      episode {
        id
        name
        episode
        air_date
      }
    }
  }
`