import axios from 'axios'
import useSWRInfinite from 'swr/infinite'

export type Pokemon = {
  name: string
  url: string
}

const fetchPokemon = async (page: number, url: string) => {
  return (
    await axios.get<{ results: Pokemon[] }>(url, {
      params: {
        limit: page === 0 ? 3 : 5,
        offset: page === 0 ? 0 : 5 * (page - 1) + 3,
      },
    })
  ).data.results
}

export const usePokemon = () => {
  const { data, error, size, setSize } = useSWRInfinite(
    (index) => [index, 'https://pokeapi.co/api/v2/pokemon'],
    fetchPokemon
  )

  return {
    pokemonList: data?.flat() ?? [],
    fetchMore: () => setSize(size + 1),
    isLoading:
      (!data && !error) ||
      (size > 0 && data && typeof data[size - 1] === 'undefined'),
  }
}
