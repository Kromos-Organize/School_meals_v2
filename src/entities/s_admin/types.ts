export type SAdminType = {
  id: number
  email: string
  role: 'S_ADMIN'
  fname: string
  name: string
  position: string
  chat_number: string
}

export type SAdminStore = {
  s_admin: SAdminType
  setData: (admin: SAdminType) => void
}

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
