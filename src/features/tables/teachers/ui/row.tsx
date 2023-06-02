import { TableCell, TableRow, Typography } from '@mui/material'
import { FC, useCallback } from 'react'

import { classToString, glueFullName, reverseBirthday } from '../lib'
import { TeacherType } from '../types'

import { ChangeTeacher } from './buttons/change'
import { RemoveTeacher } from './buttons/remove'

type PropsType = {
  teacher: TeacherType
  remove: (teacher_id: number) => void
}

export const TeacherTableRow: FC<PropsType> = ({ teacher, remove }) => {
  const removeTeacher = useCallback(() => {
    remove(teacher.id)
  }, [])

  return (
    <TableRow hover>
      <TableCell align="center">
        <Typography variant="subtitle2">{teacher.id}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{teacher.email}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{glueFullName(teacher)}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{reverseBirthday(teacher.birthday)}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{classToString(teacher.class)}</Typography>
      </TableCell>
      <TableCell align="center">
        <ChangeTeacher teacher_id={teacher.id} />
        <RemoveTeacher teacher_id={teacher.id} remove={removeTeacher} />
      </TableCell>
    </TableRow>
  )
}
