import { Header as KizenHeader } from '@components/kizen/Header'
import { BaseLayout } from '@layouts/Base'
import type { NextPage } from 'next'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { chakra, Spinner } from '@chakra-ui/react'

const LoadingView = () => (
  <chakra.div display='flex' justifyContent='center' margin={10}>
    <Spinner padding={5} />
  </chakra.div>
)

const DashboardView = dynamic(() => import('@components/kizen/DashboardView'), {
  loading: LoadingView,
})
const SettingsView = dynamic(() => import('@components/kizen/SettingsView'), {
  loading: LoadingView,
})

const KizenPage: NextPage = () => {
  const [view, setView] = useState('Dashboard')
  return (
    <BaseLayout label='Kizen Technical Interview'>
      <KizenHeader
        items={['Dashboard', 'Settings']}
        currentItem={view}
        onItemClick={(item) => {
          setView(item)
        }}
      />
      <chakra.div display='flex' flexDirection='column' alignItems='center'>
        {view === 'Dashboard' && <DashboardView />}
        {view === 'Settings' && <SettingsView />}
      </chakra.div>
    </BaseLayout>
  )
}

export default KizenPage
