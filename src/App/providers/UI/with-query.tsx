import { QueryClient, QueryClientProvider } from 'react-query'

import { ProviderPropsType } from '../types'

import { AppPropsWithLayout } from '@/App/types'

const queryClient = new QueryClient()

export const withQuery = (component: ProviderPropsType) => (props: AppPropsWithLayout) =>
  (
    <QueryClientProvider client={queryClient} contextSharing>
      {component(props)}
    </QueryClientProvider>
  )
