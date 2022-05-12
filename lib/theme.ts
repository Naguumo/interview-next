import { extendTheme, ThemeComponents, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  useSystemColorMode: true,
}

const components: ThemeComponents = {
  Container: {
    variants: {
      full: {
        maxWidth: '1400px',
        paddingX: 5,
      },
    },
  },
}

export const theme = extendTheme({
  config,
  components,
})
