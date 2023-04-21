import axios, { AxiosError } from 'axios'

export type AuthResponse = {
  id: number
  role: 'ADMIN' | 'S_ADMIN'
  accessToken: string
}

export const instance = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
})

instance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`

  return config
})

instance.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config

    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true

      try {
        const response = await instance
          .post<AuthResponse>(`/auth/refresh-token`)
          .then(res => res.data)

        localStorage.setItem('accessToken', response.accessToken)

        return instance.request(originalRequest)
      } catch (err: any | AxiosError) {
        console.log(err)
      }
    }
    throw error
  }
)
