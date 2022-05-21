import { LinkButton } from '@components/LinkButton'
import { BaseLayout } from '@layouts/Base'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <BaseLayout label='Which Interview are you looking for?'>
      <LinkButton label='Kizen' href='/kizen' />
      <LinkButton label='Agora' href='/agora' />
      <LinkButton label='Endaoment' href='/endaoment' />
    </BaseLayout>
  )
}

export default Home
