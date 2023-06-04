export type ClassTeacherType = {
  type: string
  number: number
}

export type TeacherType = {
  id: number
  school_id: number
  role: 'EMPLOYEE'
  email: string
  phone?: string
  fname?: string
  name?: string
  lname?: string
  birthday?: string
  isActive: boolean
  class: ClassTeacherType | undefined
}
