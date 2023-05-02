import { instance } from '@/shared'

import { LoginFieldsType, SuccessRespLoginType } from './types'

export const requestLogin = (data: LoginFieldsType) => {
  return instance.post<SuccessRespLoginType>(`/auth/login`, data).then(res => res.data)
}
