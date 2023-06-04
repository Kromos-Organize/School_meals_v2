export type ClassType = {
  class_id: number
  school_id: number
  user_id: number
  number: number
  type: string
  category: 'junior' | 'elder'
}

export type ClassTypeByNumber = {
  [key: string]: ClassType[]
}
