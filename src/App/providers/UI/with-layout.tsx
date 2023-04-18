import { ProviderPropsType } from '../types'

import { AppPropsWithLayout } from '@/App/types'

export const withLayout = (component: ProviderPropsType) => (props: AppPropsWithLayout) => {
  const getLayout = props.Component.getLayout ?? (page => page)

  return getLayout(<>{component(props)}</>)
}
