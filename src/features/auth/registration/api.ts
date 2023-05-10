import { instance } from '@/shared'

import { RegistrationFieldsType, SuccessRegisterRespType } from './types'

export const requestRegister = (data: RegistrationFieldsType) =>
  instance.post<SuccessRegisterRespType>(`/auth/registration`, data)
