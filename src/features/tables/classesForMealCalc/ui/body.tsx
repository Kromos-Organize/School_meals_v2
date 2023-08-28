import { TableBody } from '@mui/material'
import { FC } from 'react'

import { ClassSchoolType, TeacherType } from '@/features'
import { generateKey } from '@/shared'

import { ClassForMealCalcTableRow } from './row'

type PropsType = {
  classes: ClassSchoolType[]
  teachers?: TeacherType[]
}

export const ClassesForMealCalcTableBody: FC<PropsType> = ({ classes }) => {
  const sortClasses = classes.sort((a, b) => {
    if (a.number > b.number) return 1
    if (a.number < b.number) return -1

    return 0
  })

  const rows = sortClasses.map(cl => (
    <ClassForMealCalcTableRow key={generateKey()} classItem={cl} />
  ))

  return <TableBody>{rows}</TableBody>
}
