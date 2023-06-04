import { Box, Card, CircularProgress, LinearProgress, Table } from '@mui/material'
import { FC } from 'react'

import { Scrollbar } from '@/shared'

import {
  useActivateUserMutate,
  useBlockUserMutate,
  useListUsersQuery,
  useLoginCabinetMutate,
  useUnlockUserMutate,
} from '../model'

import { UsersTableBody } from './body'
import { UsersTableHead } from './head'

export const UsersTable: FC = () => {
  const { data: users } = useListUsersQuery()

  const { mutate: activated, isLoading: isActivated } = useActivateUserMutate()
  const { mutate: blockUser, isLoading: isBlocked } = useBlockUserMutate()
  const { mutate: unlockUser, isLoading: isUnlocked } = useUnlockUserMutate()
  const signCabinet = useLoginCabinetMutate()

  const isLoading = isActivated || isBlocked || isUnlocked

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
