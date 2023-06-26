import { TableBody } from '@mui/material'
import { FC } from 'react'

import { ClassTypeById, StudentType } from '../types'

import { StudentTableRow } from './row'

type PropsType = {
  students: StudentType[]
  classesSchool: ClassTypeById
  remove: (student_id: number) => void
}

export const StudentsTableBody: FC<PropsType> = ({ students, classesSchool, remove }) => {
  const rows = students.map(student => {
    const _class = classesSchool[student.class_id]

    const classStudent = `${_class.number}${_class.type}`

    return (
      <StudentTableRow
        key={student.student_id}
        student={student}
        classStudent={classStudent}
        remove={remove}
      />
    )
  })

  return <TableBody>{rows}</TableBody>
}
