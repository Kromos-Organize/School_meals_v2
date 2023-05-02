import { navModel } from '@/shared'

import { requestRegister } from './api'
import { RegistrationFieldsType } from './types'

export const submitRegister = async (data: RegistrationFieldsType) => {
  try {
    await requestRegister(data)

    return `${navModel.MAIN_ROUTE.auth}${navModel.AUTH_ROUTE.login}`
  } catch (e: any) {
    return e.response.data.message
  }
}
