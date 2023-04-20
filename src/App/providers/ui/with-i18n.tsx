import { appWithI18Next } from 'ni18n'

import { AppPropsWithLayout } from '../../types'
import { i18nConfig } from '../config'

export const withI18N = ({ Component }: AppPropsWithLayout) => appWithI18Next(Component, i18nConfig)
