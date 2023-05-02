import { LS, navModel } from '@/shared'

import { requestLogin } from './api'
import { LoginFieldsType } from './types'

export const submitLogin = async (data: LoginFieldsType) => {
  try {
    const response = await requestLogin(data)

    LS.set('accessToken', response.accessToken)

    return response.role === 'ADMIN'
      ? `${navModel.MAIN_ROUTE.admin}${navModel.ADMIN_ROUTE.settings}`
      : `${navModel.MAIN_ROUTE.s_admin}${navModel.ADMIN_ROUTE.settings}`
  } catch (e: any) {
    return e.response.data.message
  }
}
