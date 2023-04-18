import { createTheme } from '@mui/material/styles'
import type { Ni18nOptions } from 'ni18n'

export const i18nConfig: Ni18nOptions = {
  supportedLngs: ['ru', 'be'],
  ns: ['home', '404', 'login', 'register', 'navData', 'moderation', 'admin_settings', 'school'],
}

export const theme = createTheme({
  typography: {
    fontFamily: ['Helvetica', 'serif'].join(','),
    button: {
      textTransform: 'none',
      fontFamily: ['Helvetica', 'serif'].join(','),
      fontSize: 16,
      fontWeight: 400,
    },
  },
})
