export type SuccessRespLoginType = {
  id: number
  school_id: null | number
  role: 'S_ADMIN' | 'ADMIN'
  email: string
  phone: string
  fname: null | string
  name: null | string
  lname: null | string
  birthday: null | string
  isActive: boolean
  accessToken: string
}

export type SuccessRegisterRespType = {
  id: number
  email: string
  role: 'S_ADMIN' | 'ADMIN'
  isActive: boolean
}

export type RegistrationParamsType = {
  email: string
  password: string
  phone: string
}

export type LoginParamsType = {
  email: string
  password: string
  isAdminDev?: boolean
}
