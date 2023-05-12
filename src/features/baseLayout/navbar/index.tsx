import { Box, Stack } from '@mui/material'
import { usePathname } from 'next/navigation'

import { NavItem } from '@/shared'

import { adminItems } from './model'

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <Box
      component="nav"
      sx={{
        flexGrow: 1,
        px: 2,
        py: 3,
      }}
    >
      <Stack
        component="ul"
        spacing={0.5}
        sx={{
          listStyle: 'none',
          p: 0,
          m: 0,
        }}
      >
        {adminItems.map(item => {
          const active = item.path ? pathname === item.path : false

          return (
            <NavItem
              active={active}
              icon={item.icon}
              key={item.title}
              path={item.path}
              title={item.title}
            />
          )
        })}
      </Stack>
    </Box>
  )
}
