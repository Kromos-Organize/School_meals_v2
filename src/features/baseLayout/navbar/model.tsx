import {
  UsersIcon,
  CodeBracketIcon,
  CalculatorIcon,
  CommandLineIcon,
  ClockIcon,
  ArchiveBoxIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  WindowIcon,
  Cog8ToothIcon,
  UserCircleIcon,
  InboxStackIcon,
} from '@heroicons/react/24/outline'
import { SvgIcon } from '@mui/material'

import { navModel } from '@/shared'

export type ItemType = {
  title: string
  path: string
  icon: JSX.Element
}

export type NavItemsType = ItemType & {
  children: ItemType[]
}

export const s_adminItems: NavItemsType[] = [
  {
    title: 'L_users',
    path: navModel.MAIN_ROUTE.s_admin + navModel.S_ADMIN_ROUTE.users,
    children: [],
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: 'L_logs',
    path: navModel.MAIN_ROUTE.s_admin + navModel.S_ADMIN_ROUTE.logs,
    children: [],
    icon: (
      <SvgIcon fontSize="small">
        <CodeBracketIcon />
      </SvgIcon>
    ),
  },
  {
    title: 'L_setting',
    path: '',
    icon: (
      <SvgIcon fontSize="small">
        <Cog8ToothIcon />
      </SvgIcon>
    ),
    children: [
      {
        title: 'L_profile',
        path: navModel.MAIN_ROUTE.s_admin + navModel.S_ADMIN_ROUTE.settings,
        icon: (
          <SvgIcon fontSize="small">
            <UserCircleIcon />
          </SvgIcon>
        ),
      },
    ],
  },
]

export const adminItems: NavItemsType[] = [
  {
    title: 'L_meals',
    path: '',
    icon: (
      <SvgIcon fontSize="small">
        <CalculatorIcon />
      </SvgIcon>
    ),
    children: [
      {
        title: 'L_calculation',
        path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.meals_calculation,
        icon: (
          <SvgIcon fontSize="small">
            <CommandLineIcon />
          </SvgIcon>
        ),
      },
      {
        title: 'L_history_calc',
        path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.meals_historyCalc,
        icon: (
          <SvgIcon fontSize="small">
            <ClockIcon />
          </SvgIcon>
        ),
      },
      {
        title: 'L_type_menu',
        path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.meals_typeMenu,
        icon: (
          <SvgIcon fontSize="small">
            <InboxStackIcon />
          </SvgIcon>
        ),
      },
    ],
  },
  {
    title: 'L_schoolData',
    path: '',
    icon: (
      <SvgIcon fontSize="small">
        <ArchiveBoxIcon />
      </SvgIcon>
    ),
    children: [
      {
        title: 'L_school',
        path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.data_school,
        icon: (
          <SvgIcon fontSize="small">
            <BuildingLibraryIcon />
          </SvgIcon>
        ),
      },
      {
        title: 'L_teachers',
        path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.data_teachers,
        icon: (
          <SvgIcon fontSize="small">
            <AcademicCapIcon />
          </SvgIcon>
        ),
      },
      {
        title: 'L_classes',
        path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.data_classes,
        icon: (
          <SvgIcon fontSize="small">
            <WindowIcon />
          </SvgIcon>
        ),
      },
      {
        title: 'L_students',
        path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.data_students,
        icon: (
          <SvgIcon fontSize="small">
            <BriefcaseIcon />
          </SvgIcon>
        ),
      },
    ],
  },
  {
    title: 'L_setting',
    path: '',
    icon: (
      <SvgIcon fontSize="small">
        <Cog8ToothIcon />
      </SvgIcon>
    ),
    children: [
      {
        title: 'L_profile',
        path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.settings,
        icon: (
          <SvgIcon fontSize="small">
            <UserCircleIcon />
          </SvgIcon>
        ),
      },
    ],
  },
]
