import compose from 'compose-function'

import { withI18N } from './with-i18n'
import { withLayout } from './with-layout'
import { withQuery } from './with-query'
import { withTheme } from './with-theme'

export const withProviders = compose(withQuery, withTheme, withI18N, withLayout)
