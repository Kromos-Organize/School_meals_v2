import { Box, Card, CircularProgress, LinearProgress, Table } from '@mui/material'
import { FC } from 'react'

import { Scrollbar } from '@/shared'

import { UserType } from '../types'

import { UsersTableBody } from './body'
import { UsersTableHead } from './head'

type PropsType = {
  users: UserType[] | undefined
  isLoading: boolean
  activated: (data: { user_id: number; isActive: boolean }) => void
  blockUser: (data: { user_id: number; school_id: number }) => void
  unlockUser: (data: { id: number }) => void
  signCabinet?: (data: { email: string }) => void
}

export const UsersTable: FC<PropsType> = ({
  users,
  isLoading,
  activated,
  blockUser,
  unlockUser,
  signCabinet,
}) => {
  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          {users?.length ? (
            <>
              {isLoading && (
                <Box sx={{ width: '100%' }}>
                  <LinearProgress color="secondary" />
                </Box>
              )}
              <Table>
                <UsersTableHead />
                <UsersTableBody
                  users={users}
                  activated={activated}
                  blockUser={blockUser}
                  unlockUser={unlockUser}
                  signCabinet={signCabinet}
                />
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
