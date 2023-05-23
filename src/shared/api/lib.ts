import axios, { AxiosInstance } from 'axios'

import { AuthResponse } from './base'
import { CurrentUserType } from './types'

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

export const useRefreshToken = (user: CurrentUserType | undefined) => {
  const refreshToken = async () => {
    const res = await axios.post<AuthResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`,
      { refreshToken: user?.refreshToken }
    )

    if (user) user.accessToken = res.data.accessToken
  }

  return refreshToken
}

export const updateRequestIntercept = (instance: AxiosInstance, user: CurrentUserType) => {
  return instance.interceptors.request.use(
    config => {
      if (!config.headers['Authorization']) {
        config.headers['Authorization'] = `Bearer ${user?.accessToken}`
      }

      return config
    },
    error => Promise.reject(error)
  )
}

export const updateResponseIntercept = (
  instance: AxiosInstance,
  user: CurrentUserType,
  refreshToken: () => Promise<void>
) => {
  return instance.interceptors.response.use(
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
}
