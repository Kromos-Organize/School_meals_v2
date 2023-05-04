import { navModel } from '@/shared'

import { SuccessRespLoginType } from './types'

export const checkIsRoleSaveUser = (response: SuccessRespLoginType): string => {
  return response.role === 'ADMIN'
    ? `${navModel.MAIN_ROUTE.admin}${navModel.ADMIN_ROUTE.settings}`
    : `${navModel.MAIN_ROUTE.s_admin}${navModel.ADMIN_ROUTE.settings}`
}
