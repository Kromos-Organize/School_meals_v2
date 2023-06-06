import { ClassSchoolType } from '@/features'
import { ValueSelectType, sortArrayByKeys } from '@/shared'

export const transformClasses = (classes: ClassSchoolType[] | undefined): ValueSelectType[] => {
  const sortClasses = classes ? [...classes] : []

  sortClasses.sort(sortArrayByKeys<ClassSchoolType>(['number', 'type']))

  return sortClasses.map(c => ({ value: `${c.class_id}`, label: `${c.number}${c.type}` }))
}
