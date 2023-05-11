import { useQuery } from 'react-query'

import { AuthResponse, instance } from './base'

export const useRefreshToken = () =>
  useQuery({
    queryKey: ['refresh-token'],
    queryFn: () => instance.get<AuthResponse>(`/auth/refresh-token`),
    retry: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retryOnMount: false,
  })
