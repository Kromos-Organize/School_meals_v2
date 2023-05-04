import { create } from 'zustand'

import { SAdminStore, SAdminType } from '../types'

export const useSAdminStore = create<SAdminStore>()(set => ({
  s_admin: {
    id: 0,
    email: '',
    fname: '',
    name: '',
    role: 'S_ADMIN',
    position: '',
    chat_number: '',
  },
  setData: (s_admin: SAdminType) => set(state => ({ ...state, s_admin: { ...s_admin } })),
}))
