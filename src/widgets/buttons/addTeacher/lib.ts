import { TeacherType, glueFullName } from '@/features'
import { ValueSelectType } from '@/shared'

export const transformTeachers = (teachers: TeacherType[] | undefined): ValueSelectType[] =>
  teachers ? teachers.map(t => ({ value: `${t.id}`, label: glueFullName(t) })) : []
