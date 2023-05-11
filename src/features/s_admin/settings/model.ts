import { useQuery } from 'react-query'

import { getCurrentUser, useCurrentUser } from '@/entities'

import { getSAdminUser } from './api'

export const useGetSAdminQuery = () => {
  const { id } = useCurrentUser(getCurrentUser)

  const { data } = useQuery({
    queryFn: () => getSAdminUser(id),
    queryKey: ['get_s_admin', id],
    enabled: !!id,
    retry: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retryOnMount: false,
  })

  if (data) {
    return { user: { ...data.data } }
  }

  return {}
}
