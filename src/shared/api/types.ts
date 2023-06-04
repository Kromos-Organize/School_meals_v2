export type CurrentUserType = {
  id: number
  school_id: number | null
  email: string
  role: 'S_ADMIN' | 'ADMIN'
  fname: string
  name: string
  lname: string
  accessToken: string
  refreshToken: string
}
