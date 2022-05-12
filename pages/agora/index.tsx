import { chakra, Flex, Text } from '@chakra-ui/react'
import { BugsDisplay } from '@components/agora/BugsDisplay'
import { BaseLayout } from '@layouts/Base'
import { useBugsData } from '@lib/agora/useBugsData'
import type { NextPage } from 'next'

const AgoraPage: NextPage = () => {
  const { bugs, uploadBugsData } = useBugsData()
  return (
    <BaseLayout label='Agora - Bugs Uploader'>
      {bugs.length > 0 ? (
        <BugsDisplay bugs={bugs} />
      ) : (
        <Flex
          alignItems='center'
          width='fit-content'
          gap={5}
          padding={3}
          backgroundColor='blue.400'
          rounded='md'>
          <Text>You need to upload the CSV:</Text>
          <chakra.input
            type='file'
            padding={3}
            backgroundColor='blue.400'
            rounded='md'
            onInput={(e) => {
              const target = e.target as HTMLInputElement
              if (target.files && target.files.length > 0) {
                uploadBugsData(target.files[0])
              }
            }}
            sx={{
              '&::file-selector-button': {
                backgroundColor: 'blue.400',
                rounded: 'md',
                border: '1px solid',
                borderColor: 'blue.700',
                cursor: 'pointer',
              },
            }}
          />
        </Flex>
      )}
    </BaseLayout>
  )
}

export default AgoraPage
