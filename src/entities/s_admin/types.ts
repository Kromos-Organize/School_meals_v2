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
