import { AuthResponse, instance } from '../base'

export const authAPI = {
  refreshToken() {
    return instance.post<AuthResponse>(`/auth/refresh-token`).then(res => res.data)
  },
}
