export type ClassSchoolType = {
  class_id: number
  school_id: number
  user_id: number
  number: number
  type: string
  category: 'junior' | 'elder'
  user: TeacherForClassType
}

export type TeacherForClassType = {
  id: number
  fname: string
  name: string
  lname: string
}

export type ClassTypeByNumber = {
  [key: string]: ClassSchoolType[]
}
