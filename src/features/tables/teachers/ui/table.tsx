import { Box, Card, CircularProgress, LinearProgress, Table } from '@mui/material'
import { FC } from 'react'

import { Scrollbar } from '@/shared'

import { useListTeachersQuery, useRemoveTeacherMutate } from '../model'

import { TeachersTableBody } from './body'
import { TeachersTableHead } from './head'

export const TeachersTable: FC = () => {
  const { data: teachers, isLoading: loadList } = useListTeachersQuery()
  const { mutate: remove, isLoading: loadRemove } = useRemoveTeacherMutate()

  const isLoading = loadList || loadRemove

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          {teachers?.length ? (
            <>
              {isLoading && (
                <Box sx={{ width: '100%' }}>
                  <LinearProgress color="secondary" />
                </Box>
              )}
              <Table>
                <TeachersTableHead />
                <TeachersTableBody teachers={teachers} remove={remove} />
              </Table>
            </>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
              <CircularProgress />
            </Box>
          )}
        </Box>
      </Scrollbar>
    </Card>
  )
}
