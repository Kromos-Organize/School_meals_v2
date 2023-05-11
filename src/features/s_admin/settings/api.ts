import { instance } from '@/shared'

import { SAdminType } from './types'

export const getSAdminUser = (id: number) => {
  return instance.get<SAdminType>(`/admin/${id}`)
}
