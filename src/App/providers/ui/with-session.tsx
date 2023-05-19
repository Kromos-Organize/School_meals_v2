import { SessionProvider } from 'next-auth/react'

import { AppPropsWithLayout } from '@/App'

import { ProviderPropsType } from '../types'

export const withSession = (component: ProviderPropsType) => (props: AppPropsWithLayout) =>
  <SessionProvider session={props.pageProps.session}>{component(props)}</SessionProvider>
