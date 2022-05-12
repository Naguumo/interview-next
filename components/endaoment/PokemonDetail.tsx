import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { Pokemon } from '@lib/endaoment/usePokemon'
import { capitalize } from '@lib/stringUtil'

type PokemonDetailProps = {
  pokemon?: Pokemon
  index?: number
  onClose: () => void
}

export const PokemonDetail = ({
  pokemon,
  index,
  onClose,
}: PokemonDetailProps) => {
  return (
    <Modal
      isCentered
      autoFocus={false}
      isOpen={pokemon !== undefined}
      onClose={onClose}>
      <ModalOverlay />
      {pokemon !== undefined && (
        <ModalContent>
          <ModalHeader>{capitalize(pokemon.name)}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {index && (
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
                alt={pokemon.name}
                width='50%'
                marginX='auto'
              />
            )}
          </ModalBody>
        </ModalContent>
      )}
    </Modal>
  )
}

export default PokemonDetail
