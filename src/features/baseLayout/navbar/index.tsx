import { Box, Stack, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import { SyntheticEvent, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useCurrentUser } from '@/hooks'
import { Accordion, AccordionSummary, NavItem } from '@/shared'

import { checkRoleUserGetItem } from './lib'
import { Details } from './ui/details'

export const Navbar = () => {
  const { t } = useTranslation('navData')
  const pathname = usePathname()
  const user = useCurrentUser()

  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (id: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? id : false)
  }

  const items = checkRoleUserGetItem(user?.role ?? 'ADMIN')

  const drawItems = items.map(item => {
    const active = item.path ? pathname === item.path : false

    if (item.children.length) {
      const detailsDraw = useMemo(() => {
        return item.children.map(childItem => {
          const active = childItem.path ? pathname === childItem.path : false

          if (active) setExpanded(item.title)

          return <Details key={childItem.title} active={active} childItem={childItem} />
        })
      }, [item, pathname])

      return (
        <Accordion
          key={item.title}
          expanded={expanded === item.title}
          onChange={handleChange(item.title)}
        >
          <AccordionSummary id={item.title}>
            <Box
              component="span"
              sx={{
                alignItems: 'center',
                color: '#aab5c4',
                display: 'inline-flex',
                justifyContent: 'center',
                mr: 2,
                ...(active && {
                  color: 'primary.main',
                }),
              }}
            >
              {item.icon}
            </Box>
            <Typography>{t(`${item.title}`)}</Typography>
          </AccordionSummary>
          {detailsDraw}
        </Accordion>
      )
    }

    return (
      <NavItem
        active={active}
        icon={item.icon}
        key={item.title}
        path={item.path}
        title={t(`${item.title}`)}
      />
    )
  })

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
        {drawItems}
      </Stack>
    </Box>
  )
}
