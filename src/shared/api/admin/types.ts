export type AdminUserType = {
  id: number
  school_id: number | null
  role: 'ADMIN'
  email: string
  phone: string
  fname: string
  name: string
  lname: string
  birthday: string
  isActive: boolean
}

export type UpdateAdminUserType = {
  fname: string
  name: string
  lname: string
  phone: string
}
