export type LoginFieldsType = {
  email: string
  password: string
  isAdminDev: boolean
}

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
