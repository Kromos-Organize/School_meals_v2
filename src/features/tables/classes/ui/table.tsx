import { Box, Card, CircularProgress, LinearProgress, Table } from '@mui/material'

import { Scrollbar } from '@/shared'

import { useListClassesQuery } from '../model'

import { ClassesTableBody } from './body'
import { ClassesTableHead } from './head'

export const ClassesTable = () => {
  const { data: classes, isLoading } = useListClassesQuery()

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          {classes?.length ? (
            <>
              {isLoading && (
                <Box sx={{ width: '100%' }}>
                  <LinearProgress color="secondary" />
                </Box>
              )}
              <Table>
                <ClassesTableHead />
                <ClassesTableBody classes={classes} />
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
