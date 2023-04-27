import { AuthResponse, instance } from '../base'

import {
  LoginParamsType,
  RegistrationParamsType,
  SuccessRegisterRespType,
  SuccessRespLoginType,
} from './types'

export const authAPI = {
  register(data: RegistrationParamsType) {
    return instance.post<SuccessRegisterRespType>(`/auth/registration`, data).then(res => res.data)
  },
  login(data: LoginParamsType) {
    return instance.post<SuccessRespLoginType>(`/auth/login`, data).then(res => res.data)
  },
  refreshToken() {
    return instance.post<AuthResponse>(`/auth/refresh-token`).then(res => res.data)
  },
  logout() {
    return instance.post(`/auth/logout`).then(res => res.data)
  },
}
