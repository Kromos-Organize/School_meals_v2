import { useEffect } from 'react'

import { AppPropsWithLayout } from '@/App'
import { useLocale } from '@/entities'

import { ProviderPropsType } from '../types'

export const withLocale = (component: ProviderPropsType) => (props: AppPropsWithLayout) => {
  const getLocale = useLocale(state => state.getLocale)

  useEffect(() => {
    getLocale()
  }, [])

  return <>{component(props)}</>
}
