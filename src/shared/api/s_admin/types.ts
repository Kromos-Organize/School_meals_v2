export type UserModerationType = {
  id: number
  school_id: number
  role: string
  email: string
  phone?: string
  fname?: string
  name?: string
  lname?: string
  birthday?: string
  isActive: boolean
}

export type ActivateResType = {
  id: number
  isActivate: boolean
  message: string
}

export type SAdminUserType = {
  id: number
  email: string
  role: 'S_ADMIN' | 'ADMIN'
  fname: string
  name: string
  position: string
  chat_number: string
}
