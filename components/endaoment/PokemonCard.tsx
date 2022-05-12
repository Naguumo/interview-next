import { Button, chakra, Image } from '@chakra-ui/react'
import { Pokemon } from '@lib/endaoment/usePokemon'
import { capitalize } from '@lib/stringUtil'
import { useEffect, useState } from 'react'

type PokemonCardProps = {
  pokemon: Pokemon
  index: number
  onClick: () => void
}

export const PokemonCard = ({ pokemon, index, onClick }: PokemonCardProps) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`

  const [invisible, setInvisible] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setInvisible(false)
    }, 250)
  }, [])

  return (
    <chakra.div
      flexBasis='40%'
      display='flex'
      flexDirection='column'
      justifySelf='center'
      padding={5}
      margin={2}
      flexGrow={1}
      border='5px solid teal'
      backgroundColor='teal.800'
      rounded='sm'
      transition='all 1s 0s ease'
      opacity={invisible ? 0 : 1}
      sx={{
        '&:hover': {
          boxShadow: '0px 0px 50px 5px teal inset',
          borderColor: 'teal.200',
        },
      }}>
      <Image
        src={imageUrl}
        alt={pokemon.name}
        maxWidth='max(30vw, 200px)'
        marginX='auto'
      />
      <Button onClick={onClick}>{capitalize(pokemon.name)}</Button>
    </chakra.div>
  )
}

export default PokemonCard
