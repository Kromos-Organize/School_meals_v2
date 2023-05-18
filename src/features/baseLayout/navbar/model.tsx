import { UsersIcon, CogIcon, CodeBracketIcon } from '@heroicons/react/24/solid'
import { SvgIcon } from '@mui/material'

import { navModel } from '@/shared'

type ItemType = {
  title: string
  path: string
  icon: JSX.Element
}

type NavItemsType = ItemType & {
  children: ItemType[]
}

export const s_adminItems: NavItemsType[] = [
  {
    title: 'users',
    path: navModel.MAIN_ROUTE.s_admin + navModel.S_ADMIN_ROUTE.users,
    children: [],
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: 'logs',
    path: navModel.MAIN_ROUTE.s_admin + navModel.S_ADMIN_ROUTE.logs,
    children: [],
    icon: (
      <SvgIcon fontSize="small">
        <CodeBracketIcon />
      </SvgIcon>
    ),
  },
  {
    title: 'profile',
    path: navModel.MAIN_ROUTE.s_admin + navModel.S_ADMIN_ROUTE.settings,
    children: [],
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    ),
  },
]

export const adminItems: NavItemsType[] = [
  {
    title: 'calculate',
    path: '',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
    children: [
      {
        title: 'users',
        path: navModel.MAIN_ROUTE.s_admin + navModel.S_ADMIN_ROUTE.users,
        icon: (
          <SvgIcon fontSize="small">
            <UsersIcon />
          </SvgIcon>
        ),
      },
    ],
  },
]
