import { AxiosResponse } from 'axios'

import { instance } from '../base'

import { AdminUserType, UpdateAdminUserType } from './types'

export const adminApi = {
  getAdminUser: (id: number) => {
    return instance.get<AdminUserType>(`/user/one/${id}`).then(res => res.data)
  },
  updateAdminUserData: (id: number, data: any) => {
    return instance
      .put<UpdateAdminUserType & { birthday: string }, AxiosResponse<AdminUserType>>(
        `/user/${id}`,
        data
      )
      .then(res => res.data)
  },
}
