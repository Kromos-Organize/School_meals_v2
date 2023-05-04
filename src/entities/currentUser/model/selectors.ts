import { CurrentUserStoreType } from './store'

export const setCurrentUser = (state: CurrentUserStoreType) => state.setCurrentUser
export const getCurrentUser = (state: CurrentUserStoreType) => state.user
