import { TableBody } from '@mui/material'
import { FC } from 'react'

import { TeacherType } from '../types'

import { TeacherTableRow } from './row'

type PropsType = {
  teachers: TeacherType[]
}

export const TeachersTableBody: FC<PropsType> = ({ teachers }) => {
  const rows = teachers.map(teacher => <TeacherTableRow key={teacher.id} teacher={teacher} />)

  return <TableBody>{rows}</TableBody>
}
