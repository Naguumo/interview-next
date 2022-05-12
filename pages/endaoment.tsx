import { Button, chakra } from '@chakra-ui/react'
import PokemonCard from '@components/endaoment/PokemonCard'
import PokemonDetail from '@components/endaoment/PokemonDetail'
import { BaseLayout } from '@layouts/Base'
import { usePokemon } from '@lib/endaoment/usePokemon'
import type { NextPage } from 'next'
import { useState } from 'react'

const EndaomentPage: NextPage = () => {
  const { pokemonList, isLoading, fetchMore } = usePokemon()
  const [selectedPokemon, setSelectedPokemon] = useState<number>()

  return (
    <BaseLayout label='Endaoment Technical Interview'>
      <chakra.div display='flex' flexDirection='row' flexWrap='wrap'>
        {pokemonList.map((val, index) => (
          <PokemonCard
            key={val.name}
            pokemon={val}
            index={index + 1}
            onClick={() => {
              setSelectedPokemon(index)
            }}
          />
        ))}
      </chakra.div>
      <chakra.div textAlign='center'>
        <Button
          isLoading={isLoading}
          loadingText='Loading...'
          margin={3}
          padding={5}
          backgroundColor='blue.400'
          onClick={() => {
            fetchMore()
          }}>
          More
        </Button>
      </chakra.div>
      <PokemonDetail
        pokemon={
          selectedPokemon !== undefined
            ? pokemonList[selectedPokemon]
            : undefined
        }
        index={selectedPokemon !== undefined ? selectedPokemon + 1 : undefined}
        onClose={() => {
          setSelectedPokemon(undefined)
        }}
      />
    </BaseLayout>
  )
}

export default EndaomentPage
