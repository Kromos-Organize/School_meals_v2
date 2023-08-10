export type LoginFieldsType = {
  email: string
  password: string
  isAdminDev: boolean
}

export type SuccessRespLoginType = AdminType | SAdminType

type AdminType = {
  id: number
  school_id: null | number
  role: 'ADMIN'
  email: string
  phone: string
  fname: null | string
  name: null | string
  lname: null | string
  birthday: null | string
  isActive: boolean
  accessToken: string
}

type SAdminType = {
  id: number
  email: string
  role: 'S_ADMIN'
  fname: string
  name: string
  position: string
  chat_number: string
  accessToken: string
}
