import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Box, Stack, Typography, SvgIcon } from '@mui/material'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import { useCurrentUser } from '@/hooks'
import { Accordion, AccordionDetails, AccordionSummary, NavItem } from '@/shared'

import { checkRoleUserGetItem } from './lib'

export const Navbar = () => {
  const { t } = useTranslation('navData')
  const pathname = usePathname()

  const user = useCurrentUser()

  const items = checkRoleUserGetItem(user?.role ?? 'ADMIN')

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

        {items.map(item => {
          const active = item.path ? pathname === item.path : false

          if (item.children.length) {
            return (
              <Accordion key={item.title}>
                <AccordionSummary
                  id="panel1a-header"
                  expandIcon={
                    <SvgIcon>
                      <ChevronDownIcon />
                    </SvgIcon>
                  }
                >
                  <Typography>{item.title}</Typography>
                </AccordionSummary>
                {item.children.map(childItem => (
                  <AccordionDetails key={childItem.title}>
                    <NavItem
                      active={active}
                      icon={childItem.icon}
                      key={childItem.title}
                      path={childItem.path}
                      title={t(`L_${childItem.title}`)}
                    />
                  </AccordionDetails>
                ))}
              </Accordion>
            )
          }

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
