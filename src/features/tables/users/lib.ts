import { UserType } from './types'

enum COLOR_STATUS {
  success = 'success',
  warning = 'warning',
  error = 'error',
}

type ReturnType = {
  color: COLOR_STATUS
  status: string
}

export const checkStatus = (user: UserType): ReturnType => {
  if (user.is_block) {
    return {
      color: COLOR_STATUS.error,
      status: 'banned',
    }
  }

  if (!user.isActive) {
    return {
      color: COLOR_STATUS.warning,
      status: 'no Active',
    }
  }

  return {
    color: COLOR_STATUS.success,
    status: 'Active',
  }
}
