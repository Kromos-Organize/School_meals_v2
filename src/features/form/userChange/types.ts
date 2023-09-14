export type ClassTeacherType = {
  type: string
  number: number
}

export type UserEmployeeType = {
  id: number
  school_id: number
  role: 'EMPLOYEE' | 'ADMIN'
  email: string
  phone?: string
  fname?: string
  name?: string
  lname?: string
  birthday?: string
  isActive: boolean
  class: ClassTeacherType | undefined
}

export type TeacherChangeFieldType = {
  fname?: string
  name?: string
  lname?: string
  phone?: string
  birthday: string | null
}
