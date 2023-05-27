import compose from 'compose-function'

import { withDateLocale } from './with-date-locale'
import { withLayout } from './with-layout'
import { withLocale } from './with-locale'
import { withQuery } from './with-query'
import { withSession } from './with-session'
import { withTheme } from './with-theme'

export const withProviders = compose(
  withSession,
  withQuery,
  withTheme,
  withLayout,
  withLocale,
  withDateLocale
)
