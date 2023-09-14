import { Box, Card, LinearProgress, Table, TablePagination } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'

import { NoCreateData } from '@/shared'

import { useListTeachersQuery, useRemoveTeacherMutate } from '../model'

import { TeachersTableBody } from './body'
import { TeachersTableHead } from './head'

export const TeachersTable: FC = () => {
  const { data: teachers, isLoading: loadList } = useListTeachersQuery()
  const { mutate: remove, isLoading: loadRemove } = useRemoveTeacherMutate()

  const isLoading = loadList || loadRemove

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const router = useRouter()

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
    router.query.page = String(newPage)
    router.push(router)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(1)
  }

  return (
    <Card>
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
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={teachers?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        ) : (
          <NoCreateData action={'no_add'} />
        )}
      </Box>
    </Card>
  )
}
