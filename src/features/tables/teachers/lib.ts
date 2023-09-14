import { ClassTeacherType } from './types'

export const classToString = (teacherClass: ClassTeacherType | undefined) => {
  if (!teacherClass) return ''

  return `${teacherClass.number}${teacherClass.type}`
}

export const reverseBirthday = (birthday: string | undefined) =>
  birthday ? birthday.split('-').reverse().join('-') : ''
