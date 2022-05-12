import {
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  useColorMode,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { capitalize } from '@lib/stringUtil'

export const PrimaryHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <chakra.div
      height='5vh'
      bg='gray.700'
      color='white'
      position='sticky'
      top={0}
      zIndex={1}>
      <Container
        height='100%'
        display='flex'
        flexDirection='row'
        alignItems='center'
        variant='full'>
        <Link href='/' passHref>
          <Heading size='md' cursor='pointer'>
            Technical Interview
          </Heading>
        </Link>
        <Flex
          direction='row'
          marginLeft='auto'
          justifySelf='end'
          justifyItems='flex-end'>
          <Button
            height='100%'
            padding={3}
            onClick={() => toggleColorMode()}
            color={colorMode === 'dark' ? 'white' : 'black'}
            leftIcon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}>
            {capitalize(colorMode)}
          </Button>
        </Flex>
      </Container>
    </chakra.div>
  )
}

export default PrimaryHeader
