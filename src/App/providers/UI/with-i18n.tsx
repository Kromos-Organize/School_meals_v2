import { appWithI18Next } from 'ni18n'

import { AppPropsWithLayout } from '../../types'
import { i18nConfig } from '../config'
import { ProviderPropsType } from '../types'

export const withI18N = (component: ProviderPropsType) => (props: AppPropsWithLayout) =>
  // @ts-ignore
  appWithI18Next(component(props), i18nConfig)
