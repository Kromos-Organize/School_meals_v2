export type RegistrationFieldsType = {
  email: string
  password: string
  confirmPassword: string
  phone: string
}

export type SuccessRegisterRespType = {
  id: number
  email: string
  role: 'S_ADMIN' | 'ADMIN'
  isActive: boolean
}
