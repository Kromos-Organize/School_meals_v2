import { AppPropsWithLayout } from '@/App'

import { ProviderPropsType } from '../types'

export const withLayout = (component: ProviderPropsType) => (props: AppPropsWithLayout) => {
  const getLayout = props.Component.getLayout ?? (page => page)

  return getLayout(<>{component(props)}</>)
}
