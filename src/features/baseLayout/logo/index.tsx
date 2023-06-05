import { Box } from '@mui/material'
import NextLink from 'next/link'

import { Logo } from '@/shared'

export const LogoSide = () => (
  <Box
    component={NextLink}
    href="/"
    sx={{
      display: 'inline-flex',
      height: 32,
      width: 32,
    }}
  >
    <Logo w={48} h={48} />
  </Box>
)
