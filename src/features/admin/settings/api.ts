import { AdminType } from '@/entities'
import { instance } from '@/shared'

export const getAdminUser = (id: number) => {
  return instance.get<AdminType>(`/user/one/${id}`)
}
