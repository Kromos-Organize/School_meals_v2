import { useQuery } from 'react-query'

import { getCurrentUser, useCurrentUser } from '@/entities'

import { getAdminUser } from './api'

export const useGetAdminQuery = () => {
  const { id, role } = useCurrentUser(getCurrentUser)

  const { data } = useQuery({
    queryFn: () => getAdminUser(id),
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
