import { Box, Stack, useMediaQuery } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { signOut, useSession } from 'next-auth/react'

import { LanguagePopover } from '@/features'
import { useCurrentUser } from '@/hooks'
import { DataUser } from '@/shared'

import { useLogOutMutate } from './model'

const SIDE_NAV_WIDTH = 280
const TOP_NAV_HEIGHT = 64

export const Header = () => {
  //@ts-ignore
  const lgUp = useMediaQuery(theme => theme.breakpoints.up('lg'))
  const { mutate: logoutCabinet } = useLogOutMutate()
  const user = useCurrentUser()

  const fullName = user ? `${user.fname} ${user.name}` : ''

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: theme => alpha(theme.palette.background.default, 0.8),
          position: 'sticky',
          left: {
            lg: `${SIDE_NAV_WIDTH}px`,
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
          },
          zIndex: theme => theme.zIndex.appBar,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="flex-end"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,
          }}
        >
          <LanguagePopover />
          <Stack alignItems="center" direction="row" spacing={2}>
            <DataUser info={fullName} logout={logoutCabinet} />
          </Stack>
        </Stack>
      </Box>
    </>
  )
}
