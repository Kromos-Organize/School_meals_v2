import { TeacherType } from '@/features'
import { ValueSelectType, glueFullName } from '@/shared'

export const transformTeachers = (teachers: TeacherType[] | undefined): ValueSelectType[] =>
  teachers ? teachers.map(t => ({ value: `${t.id}`, label: glueFullName(t) })) : []
