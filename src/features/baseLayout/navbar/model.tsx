import { UsersIcon, CogIcon, CodeBracketIcon } from '@heroicons/react/24/solid'
import { SvgIcon } from '@mui/material'

import { navModel } from '@/shared'

export const adminItems = [
  {
    title: 'users',
    path: navModel.MAIN_ROUTE.s_admin + navModel.S_ADMIN_ROUTE.users,
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: 'logs',
    path: navModel.MAIN_ROUTE.s_admin + navModel.S_ADMIN_ROUTE.logs,
    icon: (
      <SvgIcon fontSize="small">
        <CodeBracketIcon />
      </SvgIcon>
    ),
  },
  {
    title: 'profile',
    path: navModel.MAIN_ROUTE.s_admin + navModel.S_ADMIN_ROUTE.settings,
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    ),
  },
]
