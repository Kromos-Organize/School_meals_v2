import { instance } from '@/shared'

import { LoginFieldsType, SuccessRespLoginType } from './types'

export const requestLogin = (data: LoginFieldsType) =>
  instance.post<SuccessRespLoginType>(`/auth/login`, data)
