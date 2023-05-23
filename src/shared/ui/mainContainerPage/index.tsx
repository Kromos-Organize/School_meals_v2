import { Box, Container, Stack } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

export const MainContainerPage: FC<PropsWithChildren> = ({ children }) => (
  <Box
    component="main"
    sx={{
      flexGrow: 1,
      py: 8,
    }}
  >
    <Container maxWidth="xl">
      <Stack spacing={3}>{children}</Stack>
    </Container>
  </Box>
)
