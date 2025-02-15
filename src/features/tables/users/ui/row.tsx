import { TableCell, TableRow, Typography } from '@mui/material'
import { FC } from 'react'

import { Label } from '@/shared'

import { checkStatus } from '../lib'
import { UserType } from '../types'

import { ActivatedButton } from './buttons/activated'
import { BlockedButton } from './buttons/blocked'
import { SignInCabinet } from './buttons/signInCabinet'

type PropsType = {
  user: UserType
  activated: (data: { user_id: number; isActive: boolean }) => void
  blockUser: (data: { user_id: number; school_id: number }) => void
  unlockUser: (data: { id: number }) => void
  signCabinet: (email: string) => void
}

export const UserTableRow: FC<PropsType> = ({
  user,
  activated,
  blockUser,
  unlockUser,
  signCabinet,
}) => {
  const userStatus = checkStatus(user)

  const userActivated = (isActive: boolean) => {
    activated({ user_id: user.id, isActive })
  }

  const blocked = () => blockUser({ user_id: user.id, school_id: user.school_id })
  const unlocked = () => unlockUser({ id: user.id })

  const sign = () => signCabinet(user.email)

  return (
    <TableRow hover>
      <TableCell align="center">
        <Typography variant="subtitle2">{user.id}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{user.school_id}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{`${user.fname} ${user.name}`}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{user.email}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{user.phone}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="subtitle2">{user.role}</Typography>
      </TableCell>
      <TableCell align="center">
        <Label color={userStatus.color}>{userStatus.status}</Label>
      </TableCell>
      <TableCell align="center">
        <ActivatedButton isActive={user.isActive} userActivated={userActivated} />
        <BlockedButton isBlock={user.is_block} blocked={blocked} unlocked={unlocked} />
        <SignInCabinet sign={sign} />
      </TableCell>
    </TableRow>
  )
}
