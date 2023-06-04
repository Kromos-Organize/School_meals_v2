export type S_AdminType = {
  id: number
  email: string
  role: 'ADMIN'
  fname?: string
  name?: string
  position?: string
  chat_number?: string
}

export type S_AdminChangeFieldType = {
  fname?: string
  name?: string
  position?: string
  chat_number?: string
}
