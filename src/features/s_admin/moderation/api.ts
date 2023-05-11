import { instance } from '@/shared'

import { ActivateResType, UserModerationType } from './types'

export const moderationApi = {
  getListModeration: () => {
    return instance.get<UserModerationType[]>('/user/moderation').then(res => res.data)
  },
  activateUser: (data: { user_id: number; isActive: boolean }) => {
    return instance
      .put<ActivateResType>(`/user/activate/${data.user_id}`, {
        isActive: data.isActive,
      })
      .then(res => res.data)
  },
  removeUser: (user_id: number) => {
    return instance.delete<{ id: number }>(`/user/${user_id}`).then(res => res.data)
  },
}
