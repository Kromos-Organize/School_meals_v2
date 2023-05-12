import { Avatar, MenuItem, MenuList } from '@mui/material'
import { FC } from 'react'

import { usePopover } from '@/hooks'

import { AccountPopover } from './popover'

type PropsType = {
  info: string
  logout: () => void
}

export const DataUser: FC<PropsType> = ({ info, logout }) => {
  const accountPopover = usePopover()

  return (
    <>
      <Avatar
        onClick={accountPopover.handleOpen}
        ref={accountPopover.anchorRef}
        sx={{
          cursor: 'pointer',
          height: 40,
          width: 40,
        }}
        src="/assets/avatars/avatar-anika-visser.png"
      />
      <AccountPopover
        infoUser={info}
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      >
        <MenuList
          disablePadding
          dense
          sx={{
            p: '8px',
            '& > *': {
              borderRadius: 1,
            },
          }}
        >
          <MenuItem onClick={logout}>Sign out</MenuItem>
        </MenuList>
      </AccountPopover>
    </>
  )
}
