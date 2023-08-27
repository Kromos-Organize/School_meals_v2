import { TableBody } from '@mui/material'
import { FC } from 'react'

import { TeacherType } from '@/features'
import { generateKey } from '@/shared'

import { ClassSchoolType } from '../types'

import { ClassTableRow } from './row'

type PropsType = {
  classes: ClassSchoolType[]
  teachers?: TeacherType[]
}

export const ClassesTableBody: FC<PropsType> = ({ classes }) => {
  const sortClasses = classes.sort((a, b) => {
    if (a.number > b.number) return 1
    if (a.number < b.number) return -1

    return 0
  })

  const rows = sortClasses.map(cl => <ClassTableRow key={generateKey()} classItem={cl} />)

  return <TableBody>{rows}</TableBody>
}
