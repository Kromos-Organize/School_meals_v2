import { TableBody } from '@mui/material'
import { FC } from 'react'

import { TeacherType } from '../types'

import { TeacherTableRow } from './row'

type PropsType = {
  teachers: TeacherType[]
  remove: (teacher_id: number) => void
}

export const TeachersTableBody: FC<PropsType> = ({ teachers, remove }) => {
  const rows = teachers.map(teacher => (
    <TeacherTableRow key={teacher.id} teacher={teacher} remove={remove} />
  ))

  return <TableBody>{rows}</TableBody>
}
