import { ThemeProvider } from '@mui/material/styles'

import { AppPropsWithLayout } from '@/App/'

import { theme } from '../config'
import { ProviderPropsType } from '../types'

export const withTheme = (component: ProviderPropsType) => (props: AppPropsWithLayout) =>
  <ThemeProvider theme={theme}>{component(props)}</ThemeProvider>
