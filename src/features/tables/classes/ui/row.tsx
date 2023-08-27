import { TableCell, TableRow, Typography } from '@mui/material'
import { FC } from 'react'

import { ClassSchoolType } from '@/features'

type PropsType = {
  classItem: ClassSchoolType
}

export const ClassTableRow: FC<PropsType> = ({ classItem }) => {
  return (
    <TableRow hover>
      <TableCell align="center">
        <Typography variant="subtitle2">
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: 'red',
              border: '1px solid',
              margin: '0 auto',
            }}
          />
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{classItem.number}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{10}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{classItem.user.fname}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">Действия</Typography>
      </TableCell>
    </TableRow>
  )
}
