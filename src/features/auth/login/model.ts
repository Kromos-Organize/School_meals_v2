import { LS } from '@/shared'

import { requestLogin } from './api'
import { LoginFieldsType } from './types'

export const submitLogin = async (data: LoginFieldsType) => {
  try {
    const response = await requestLogin(data)

    LS.set('accessToken', response.accessToken)

    return response
  } catch (e: any) {
    return e.response.data.message
  }
}
