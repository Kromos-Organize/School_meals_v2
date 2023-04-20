import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'

import { AppPropsWithLayout } from '@/App'

import { ProviderPropsType } from '../types'

const queryClient = new QueryClient()

export const withQuery = (component: ProviderPropsType) => (props: AppPropsWithLayout) =>
  (
    <QueryClientProvider client={queryClient} contextSharing>
      <Hydrate state={props.pageProps.dehydrateState}>{component(props)}</Hydrate>
    </QueryClientProvider>
  )
