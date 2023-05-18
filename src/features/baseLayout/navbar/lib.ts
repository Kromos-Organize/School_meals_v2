import { adminItems, s_adminItems } from './model'

export const checkRoleUserGetItem = (type: 'S_ADMIN' | 'ADMIN') => {
  switch (type) {
    case 'ADMIN':
      return adminItems
    case 'S_ADMIN':
      return s_adminItems
  }
}
