import { instance } from '@/shared'

import { ActivateResType, SAdminType, UserModerationType } from './types'

export const s_adminApi = {
  getSAdminUser: (id: number) => {
    return instance.get<SAdminType>(`/admin/${id}`).then(res => res.data)
  },
  getListModeration: () => {
    return instance.get<UserModerationType[]>('/user/moderation').then(res => res.data)
  },
  activateUser: (user_id: number, isActive: boolean) => {
    return instance
      .put<ActivateResType>(`/user/activate/${user_id}`, { isActive })
      .then(res => res.data)
  },
  removeUser: (user_id: number) => {
    return instance.delete<{ id: number }>(`/user/${user_id}`).then(res => res.data)
  },
}
