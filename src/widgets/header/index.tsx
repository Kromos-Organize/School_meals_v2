import { Box, Stack, useMediaQuery } from '@mui/material'
import { alpha } from '@mui/material/styles'

import { getCurrentUser, getFullNameUser, useCurrentUser } from '@/entities'
import { DataUser } from '@/shared'

import { useLogOutMutate } from './model'

const SIDE_NAV_WIDTH = 280
const TOP_NAV_HEIGHT = 64

export const Header = () => {
  //@ts-ignore
  const lgUp = useMediaQuery(theme => theme.breakpoints.up('lg'))

  const fullName = useCurrentUser(getFullNameUser)
  const { mutate: logoutCabinet } = useLogOutMutate()

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
          <Stack alignItems="center" direction="row" spacing={2}>
            <DataUser info={fullName} logout={logoutCabinet} />
          </Stack>
        </Stack>
      </Box>
    </>
  )
}
