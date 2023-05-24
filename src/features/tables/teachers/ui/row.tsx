import { TableCell, TableRow, Typography } from '@mui/material'
import { FC } from 'react'

import { classToString, glueFullName } from '../lib'
import { TeacherType } from '../types'

type PropsType = {
  teacher: TeacherType
}

export const TeacherTableRow: FC<PropsType> = ({ teacher }) => {
  return (
    <TableRow hover>
      <TableCell align="center">
        <Typography variant="subtitle2">{teacher.id}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{glueFullName(teacher)}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{teacher.email}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{classToString(teacher.class)}</Typography>
      </TableCell>
      <TableCell align="center"></TableCell>
    </TableRow>
  )
}
