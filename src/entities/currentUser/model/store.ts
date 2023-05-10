import { create } from 'zustand'

type CurrentUserType = {
  id: number
  role: 'ADMIN' | 'S_ADMIN'
}

export type CurrentUserStoreType = {
  user: CurrentUserType
  setCurrentUser: (user: CurrentUserType) => void
}

export const useCurrentUser = create<CurrentUserStoreType>()(set => ({
  user: {
    id: 0,
    role: 'ADMIN',
  },
  setCurrentUser: (user: CurrentUserType) => set(state => ({ ...state, user: { ...user } })),
}))
