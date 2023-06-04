import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { AppPropsWithLayout } from '@/App/'

import { createTheme } from '../theme'
import { ProviderPropsType } from '../types'

export const withTheme = (component: ProviderPropsType) => (props: AppPropsWithLayout) => {
  const theme = createTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {component(props)}
    </ThemeProvider>
  )
}
