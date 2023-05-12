import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { FC, PropsWithChildren } from 'react'
import SimpleBar from 'simplebar-react'

const Scrollbar = styled(SimpleBar)``

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
