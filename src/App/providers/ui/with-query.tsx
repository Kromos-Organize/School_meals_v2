import { useState } from 'react'
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { AppPropsWithLayout } from '@/App'

import { ProviderPropsType } from '../types'

export const withQuery = (component: ProviderPropsType) => (props: AppPropsWithLayout) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient} contextSharing>
      <Hydrate state={props.pageProps.dehydrateState}>{component(props)}</Hydrate>
      {process.env.NEXT_PUBLIC_NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  )
}
