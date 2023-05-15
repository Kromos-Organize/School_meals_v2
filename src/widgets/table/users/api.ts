import { ActivateResType, UserType } from '@/features'
import { instance } from '@/shared'

export const moderationApi = {
  getUsersList: () => {
    return instance.get<UserType[]>('/user/list').then(res => res.data)
  },
  signInCabinet: (data: { email: string }) => {
    return instance.post('/auth/login/cabinet', data).then(res => res)
  },
  activateUser: (data: { user_id: number; isActive: boolean }) => {
    return instance
      .put<ActivateResType>(`/user/activate/${data.user_id}`, {
        isActive: data.isActive,
      })
      .then(res => res.data)
  },
  blockUser: (data: { user_id: number; school_id: number }) => {
    return instance.post('/block_cabinet', data).then(res => res.data)
  },
  unlockUser: (data: { id: number }) => {
    return instance.delete(`/block_cabinet/${data.id}`).then(res => res.data)
  },
  removeUser: (user_id: number) => {
    return instance.delete<{ id: number }>(`/user/${user_id}`).then(res => res.data)
  },
}
