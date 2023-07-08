import { ClassSchoolType } from '../classes'

import { ClassTypeById, PhoneParentsType } from './types'

export const updateClassesSchool = (classes: ClassSchoolType[] | undefined) => {
  const res: ClassTypeById = {}

  if (classes?.length) {
    classes.forEach(c => {
      res[`${c.class_id}`] = c
    })
  }

  return res
}

export const titleLargeFamily = (isLarge: boolean, yes: string, no: string) => (isLarge ? yes : no)

export const showPhoneParents = (phones: PhoneParentsType) => {
  if (phones.f_phone || phones.m_phone) {
    return `${phones.f_phone} \n ${phones.m_phone}`
  }
}
