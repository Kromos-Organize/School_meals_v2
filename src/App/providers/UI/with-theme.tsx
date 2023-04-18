import { ThemeProvider } from '@mui/material/styles'

import { theme } from '../config'
import { ProviderPropsType } from '../types'

import { AppPropsWithLayout } from '@/App/types'

export const withTheme = (component: ProviderPropsType) => (props: AppPropsWithLayout) =>
  <ThemeProvider theme={theme}>{component(props)}</ThemeProvider>
