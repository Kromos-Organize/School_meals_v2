import { swalAlert, swalAlertQuestion } from '@/shared'

import { TeacherType, ClassTeacherType } from './types'

export const glueFullName = (teacher: TeacherType) => {
  const { fname, name, lname } = teacher

  if (lname) return `${fname} ${name} ${lname}`

  return `${fname} ${name}`
}

export const classToString = (teacherClass: ClassTeacherType | undefined) => {
  if (!teacherClass) return ''

  return `${teacherClass.number}${teacherClass.type}`
}

export const reverseBirthday = (birthday: string | undefined) =>
  birthday ? birthday.split('-').reverse().join('-') : ''
