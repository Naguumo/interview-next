import { Container, Heading } from '@chakra-ui/react'
import { PrimaryHeader } from '@components/PrimaryHeader'

type BaseLayoutProps = {
  label?: string
  children?: React.ReactNode
}

export const BaseLayout = ({ label, children }: BaseLayoutProps) => {
  return (
    <>
      <PrimaryHeader />
      <Container marginTop={5} as='main' variant='full'>
        {label && <Heading marginBottom={5}>{label}</Heading>}
        {children}
      </Container>
    </>
  )
}
