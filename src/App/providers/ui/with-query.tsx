import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { AppPropsWithLayout } from '@/App'

import { ProviderPropsType } from '../types'

const queryClient = new QueryClient()

export const withQuery = (component: ProviderPropsType) => (props: AppPropsWithLayout) =>
  (
    <QueryClientProvider client={queryClient} contextSharing>
      <Hydrate state={props.pageProps.dehydrateState}>{component(props)}</Hydrate>
      {process.env.NEXT_PUBLIC_NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  )
