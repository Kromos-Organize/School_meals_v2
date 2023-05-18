import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

import { instance } from './base'

export const noRefetch = {
  // refetchInterval: false,
  refetchIntervalInBackground: false,
  refetchOnMount: false,
  refetchOnReconnect: false,
  refetchOnWindowFocus: false,
  retryOnMount: false,
}

export const checkErrorResponse = (error: any): string => {
  if (error && axios.isAxiosError(error) && 'response' in error && error?.response) {
    return error.response.data.message
  }

  return 'no message'
}

export const useAxiosAuth = () => {
  const { data: session } = useSession()

  useEffect(() => {
    const requestIntercept = instance.interceptors.request.use(config => {
      if (!config.headers['Authorization']) {
        config.headers['Authorization'] = `Bearer ${session?.user.accessToken}`
      }

      return config
    })

    return () => {
      instance.interceptors.request.eject(requestIntercept)
    }
  }, [session])

  return instance
}
