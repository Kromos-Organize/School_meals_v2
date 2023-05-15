import { TableBody } from '@mui/material'
import { FC } from 'react'

import { UserType } from '../types'

import { UserTableRow } from './row'

type PropsType = {
  users: UserType[]
  activated: (data: { user_id: number; isActive: boolean }) => void
  blockUser: (data: { user_id: number; school_id: number }) => void
  unlockUser: (data: { id: number }) => void
  signCabinet: (data: { email: string }) => void
}

export const UsersTableBody: FC<PropsType> = ({
  users,
  activated,
  blockUser,
  unlockUser,
  signCabinet,
}) => {
  const rows = users.map(user => (
    <UserTableRow
      key={user.id}
      user={user}
      activated={activated}
      blockUser={blockUser}
      unlockUser={unlockUser}
      signCabinet={signCabinet}
    />
  ))

  return <TableBody>{rows}</TableBody>
}
