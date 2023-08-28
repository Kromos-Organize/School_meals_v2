import { Box, Card, CircularProgress, LinearProgress, Table } from '@mui/material'

import { useListClassesQuery } from '@/features'
import { Scrollbar } from '@/shared'

import { ClassesForMealCalcTableBody } from '@/features/tables/classesForMealCalc/ui/body'
import { ClassesForMealCalcTableHead } from '@/features/tables/classesForMealCalc/ui/head'

export const ClassesForMealCalcTable = () => {
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
                <ClassesForMealCalcTableHead />
                <ClassesForMealCalcTableBody classes={classes} />
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
