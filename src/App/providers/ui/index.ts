import compose from 'compose-function'

import { withLayout } from './with-layout'
import { withQuery } from './with-query'
import { withTheme } from './with-theme'

export { withI18N } from './with-i18n'
export const withProviders = compose(withQuery, withTheme, withLayout)
