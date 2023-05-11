export type UserModerationType = {
  id: number
  school_id: number
  role: 'ADMIN'
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
