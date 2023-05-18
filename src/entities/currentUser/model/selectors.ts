import { CurrentUserStoreType } from './store'

export const setCurrentUser = (state: CurrentUserStoreType) => state.setCurrentUser
export const getCurrentUser = (state: CurrentUserStoreType) => state.user
export const getRole = (state: CurrentUserStoreType) => state.user.role
export const getFullNameUser = (state: CurrentUserStoreType) => {
  const user = state.user

  if (user.fname && user.name) {
    return `${user.fname} ${user.name}`
  } else if (user.fname) {
    return user.fname
  } else if (user.name) {
    return user.name
  }

  return 'имя пользователя'
}
