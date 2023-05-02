import { instance } from '@/shared'

import { RegistrationFieldsType, SuccessRegisterRespType } from './types'

export const requestRegister = (data: RegistrationFieldsType) => {
  return instance.post<SuccessRegisterRespType>(`/auth/registration`, data).then(res => res.data)
}
