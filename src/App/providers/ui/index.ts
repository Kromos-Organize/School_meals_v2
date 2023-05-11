import compose from 'compose-function'

import { withAuth } from './with-auth'
import { withLayout } from './with-layout'
import { withQuery } from './with-query'
import { withTheme } from './with-theme'

export const withProviders = compose(withQuery, withTheme, withLayout, withAuth)
