export type StudentType = {
  student_id: number
  school_id: number
  class_id: number
  fname: string
  name: string
  lname?: string
  birthday: string | null
  isLargeFamilies: boolean
  isBudget: boolean
}

export type StudentChangeFieldsType = {
  fname: string
  name: string
  lname?: string
  birthday: string | null
}
