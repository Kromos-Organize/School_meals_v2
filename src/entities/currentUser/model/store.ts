import { create } from 'zustand'

export type CurrentUserType = {
  id: number
  role: 'ADMIN' | 'S_ADMIN'
  fname: string
  name: string
  lname: string
}

export type CurrentUserStoreType = {
  user: CurrentUserType
  setCurrentUser: (user: CurrentUserType) => void
}

export const useCurrentUser = create<CurrentUserStoreType>()(set => ({
  user: {
    id: 0,
    role: 'ADMIN',
    fname: '',
    name: '',
    lname: '',
  },
  setCurrentUser: (user: CurrentUserType) => set(state => ({ ...state, user: { ...user } })),
}))
