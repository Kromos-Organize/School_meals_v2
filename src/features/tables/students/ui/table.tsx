import {Box, Card, CircularProgress, LinearProgress, Table} from '@mui/material'
import {FC} from 'react'

import {updateClassesSchool} from '../lib'
import {useListClassesQuery, useListStudentsQuery, useRemoveStudentMutate} from '../model'

import {StudentsTableBody} from './body'
import {StudentsTableHead} from './head'

export const StudentsTable: FC = () => {
  const { data: students, isLoading: loadStudents } = useListStudentsQuery()
  const { data: classesSchool, isLoading: loadClass } = useListClassesQuery()

  const { mutate: removeStudent, isLoading: loadRemove } = useRemoveStudentMutate()

  const isLoading = loadStudents || loadClass || loadRemove

  return (
    <Card>
        <Box sx={{ minWidth: 800 }}>
          {students?.length ? (
            <>
              {isLoading && (
                <Box sx={{ width: '100%' }}>
                  <LinearProgress color="secondary" />
                </Box>
              )}
              <Table>
                <StudentsTableHead />
                <StudentsTableBody
                  students={students}
                  classesSchool={updateClassesSchool(classesSchool)}
                  remove={removeStudent}
                />
              </Table>
            </>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
              <CircularProgress />
            </Box>
          )}
        </Box>
    </Card>
  )
}
