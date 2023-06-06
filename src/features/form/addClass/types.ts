export type ClassType = {
  school_id: number
  user_id: number
  number: number
  type: string
}

export type ClassFieldsType = Omit<ClassType, 'school_id'>
