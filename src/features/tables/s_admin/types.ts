export type AdminType = {
  id: number
  email: string
  role: 'ADMIN'
  fname?: string
  name?: string
  position?: string
  chat_number?: string
}

export type AdminChangeFieldType = {
  fname?: string
  name?: string
  position?: string
  chat_number?: string
}
