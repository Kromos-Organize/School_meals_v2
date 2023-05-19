import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

import { useCurrentUser } from '@/hooks'

import { AuthResponse, instance } from './base'

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

export const useRefreshToken = () => {
  const user = useCurrentUser()

  const refreshToken = async () => {
    const res = await axios.post<AuthResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`,
      { refreshToken: user?.refreshToken }
    )

    if (user) user.accessToken = res.data.accessToken
  }

  return refreshToken
}

export const useAxiosAuth = () => {
  const user = useCurrentUser()
  const refreshToken = useRefreshToken()

  useEffect(() => {
    const requestIntercept = instance.interceptors.request.use(
      config => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${user?.accessToken}`
        }

        return config
      },
      error => Promise.reject(error)
    )

    const responseIntercept = instance.interceptors.response.use(
      response => response,
      async error => {
        const prevRequest = error.config

        if (error.response.status === 401 && !prevRequest.sent) {
          prevRequest.sent = true

          await refreshToken()
          prevRequest.headers['Authorization'] = `Bearer ${user?.accessToken}`

          return instance(prevRequest)
        }

        return Promise.reject(error)
      }
    )

    return () => {
      instance.interceptors.request.eject(requestIntercept)
      instance.interceptors.response.eject(responseIntercept)
    }
  }, [user])

  return instance
}
