import { Drawer, useMediaQuery, Box, Typography, Divider } from '@mui/material'

import { LogoSide, Navbar, SideWrapper } from '@/features'
import { useBoolean } from '@/hooks'
import { InfoCabinet } from '@/shared'

export const SideBar = () => {
  const { value, setFalse } = useBoolean()

  //@ts-ignore
  const lgUp = useMediaQuery(theme => theme.breakpoints.up('lg'))

  const content = (
    <SideWrapper>
      <Box sx={{ p: 3 }}>
        <LogoSide />
        <InfoCabinet />
      </Box>
      <Divider sx={{ borderColor: 'neutral.600' }} />
      <Navbar />
    </SideWrapper>
  )

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    )
  }

  return (
    <Drawer
      anchor="left"
      onClose={setFalse}
      open={value}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.400',
          color: 'common.white',
          width: 280,
        },
      }}
      sx={{ zIndex: theme => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  )
}
