import { Box, Card, CircularProgress, LinearProgress, Table } from '@mui/material'
import { FC } from 'react'

import { Scrollbar } from '@/shared'

import { TeacherType } from '../types'

import { TeachersTableBody } from './body'
import { TeachersTableHead } from './head'

type PropsType = {
  teachers: TeacherType[] | undefined
}

export const TeachersTable: FC<PropsType> = ({ teachers }) => {
  const isLoading = false

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
                <TeachersTableBody teachers={teachers} />
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
