export type StudentType = {
  student_id: number
  school_id: number
  class_id: number
  fname: string
  name: string
  lname: string
  birthday: string
  isLargeFamilies: boolean
  isBudget: boolean
  phoneParents: PhoneParentsType
}

export type PhoneParentsType = {
  phone_id: number
  student_id: number
  m_phone: string | null
  f_phone: string | null
}

export type ClassStudentType = {
  class_id: number
  school_id: number
  user_id: number
  number: number
  type: string
  category: 'junior' | 'elder'
  user: any
}

export type ClassTypeById = {
  [key: string]: ClassStudentType
}
