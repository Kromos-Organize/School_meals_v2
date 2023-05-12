import { Box, Stack, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import { NavItem } from '@/shared'

import { adminItems } from './model'

export const Navbar = () => {
  const { t } = useTranslation('navData')
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
        <Typography variant="subtitle2" color="textSecondary"></Typography>
        {adminItems.map(item => {
          const active = item.path ? pathname === item.path : false

          // debugger
          // let subPath = []

          // if (item.subPath) {
          //   subPath = item.subPath.map(sub => {
          //     const active = sub.path ? pathname === sub.path : false

          //     return (
          //       <NavItem
          //         active={active}
          //         icon={sub.icon}
          //         key={sub.title}
          //         path={sub.path}
          //         title={t(`L_${sub.title}`)}
          //       />
          //     )
          //   })

          //   return (
          //     <>
          //       <Typography variant="subtitle2" color="textSecondary"></Typography>
          //       {subPath}
          //     </>
          //   )
          // }

          return (
            <NavItem
              active={active}
              icon={item.icon}
              key={item.title}
              path={item.path}
              title={t(`L_${item.title}`)}
            />
          )
        })}
      </Stack>
    </Box>
  )
}
