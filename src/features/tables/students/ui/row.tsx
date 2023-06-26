import { TableCell, TableRow, Typography } from '@mui/material'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { glueFullName } from '@/shared'

import { showPhoneParents, titleLargeFamily } from '../lib'
import { StudentType } from '../types'

import { ChangeStudent } from './buttons/change'
import { RemoveStudent } from './buttons/remove'

type PropsType = {
  student: StudentType
  classStudent: string
  remove: (student_id: number) => void
}

export const StudentTableRow: FC<PropsType> = ({ student, classStudent, remove }) => {
  const { t } = useTranslation('students')

  const removeStudent = useCallback(() => {
    remove(student.student_id)
  }, [])

  return (
    <TableRow hover>
      <TableCell align="center">
        <Typography variant="subtitle2">{student.student_id}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{glueFullName<StudentType>(student)}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{classStudent}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">
          {titleLargeFamily(student.isLargeFamilies, t(':_yes'), t('L_no'))}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{showPhoneParents(student.phoneParents)}</Typography>
      </TableCell>
      <TableCell align="center">
        <ChangeStudent student_id={student.student_id} />
        <RemoveStudent remove={removeStudent} />
      </TableCell>
    </TableRow>
  )
}
