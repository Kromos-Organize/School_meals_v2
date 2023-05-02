import { instance } from '@/shared'

export const requestLogout = () => {
  return instance.post(`/auth/logout`).then(res => res.data)
}
