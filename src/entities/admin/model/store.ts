import { create } from 'zustand'

import { AdminStore, AdminType } from '../types'

export const useAdminStore = create<AdminStore>()(set => ({
  admin: {
    id: 0,
    school_id: '',
    role: 'ADMIN',
    email: '',
    phone: '',
    fname: '',
    name: '',
    lname: '',
    birthday: '',
    isActive: false,
  },
  setData: (admin: AdminType) => set(state => ({ ...state, admin: { ...admin } })),
}))
