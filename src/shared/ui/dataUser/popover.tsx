import { Box, Divider, MenuItem, MenuList, Popover, Typography } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

type PropsType = {
  anchorEl: any
  onClose: () => void
  open: boolean
  infoUser: string
}

export const AccountPopover: FC<PropsWithChildren<PropsType>> = ({
  anchorEl,
  onClose,
  open,
  infoUser,
  children,
}) => {
  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Account</Typography>
        <Typography color="text.secondary" variant="body2">
          {infoUser}
        </Typography>
      </Box>
      <Divider />
      {children}
    </Popover>
  )
}
