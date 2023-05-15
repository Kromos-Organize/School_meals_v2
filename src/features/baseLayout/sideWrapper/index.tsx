import { Box } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

import { Scrollbar } from '@/shared'

export const SideWrapper: FC<PropsWithChildren> = ({ children }) => (
  <Scrollbar
    sx={{
      height: '100%',
      '& .simplebar-content': {
        height: '100%',
      },
      '& .simplebar-scrollbar:before': {
        background: 'neutral.400',
      },
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {children}
    </Box>
  </Scrollbar>
)
