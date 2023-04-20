import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import CalculateIcon from '@mui/icons-material/Calculate'
import DashboardIcon from '@mui/icons-material/Dashboard'
import DescriptionIcon from '@mui/icons-material/Description'
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning'
import HistoryIcon from '@mui/icons-material/History'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import NoteIcon from '@mui/icons-material/Note'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import SchoolIcon from '@mui/icons-material/School'
import SignLanguageIcon from '@mui/icons-material/SignLanguage'

import { NavigationDataType, navModel } from '@/shared/navigation'

export const navigationData: NavigationDataType = {
  S_ADMIN: [
    // админ проекта
    {
      id: '1',
      icon: <SchoolIcon />,
      title: 'schools',
      path: navModel.MAIN_ROUTE.s_admin + navModel.S_ADMIN_ROUTE.schools,
    },
    {
      id: '2',
      icon: <HowToRegIcon />,
      title: 'moderation',
      path: navModel.MAIN_ROUTE.s_admin + navModel.S_ADMIN_ROUTE.moderation,
    },
    {
      id: '3',
      icon: <NoteIcon />,
      title: 'logs',
      path: navModel.MAIN_ROUTE.s_admin + navModel.S_ADMIN_ROUTE.logs,
    },
    {
      id: '4',
      icon: <AccountCircleIcon />,
      title: 'profile',
      routes: [
        {
          id: '5',
          icon: <ManageAccountsIcon />,
          title: 'setting',
          path: navModel.MAIN_ROUTE.s_admin + navModel.S_ADMIN_ROUTE.settings,
        },
      ],
    },
  ],
  ADMIN: [
    // Админ школы
    {
      id: '1',
      icon: <RestaurantIcon />,
      title: 'calculation',
      routes: [
        //добавить потом иконки
        {
          id: '2',
          icon: <CalculateIcon />,
          title: 'auto_calc',
          path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.meals_autoCalc,
        },
        {
          id: '3',
          icon: <SignLanguageIcon />,
          title: 'manual_calc',
          path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.meals_manualCalc,
        },
        {
          id: '4',
          icon: <HistoryIcon />,
          title: 'history_calc',
          path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.meals_historyCalc,
        },
      ],
    },
    {
      id: '5',
      icon: <SchoolIcon />,
      title: 'school',
      routes: [
        {
          id: '6',
          icon: <DescriptionIcon />,
          title: 'schoolData',
          path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.data_school,
        },
        {
          id: '7',
          icon: <AssignmentIndIcon />,
          title: 'teachers',
          path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.data_teachers,
        },
        {
          id: '8',
          icon: <DashboardIcon />,
          title: 'classes',
          path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.data_classes,
        },
        {
          id: '9',
          icon: <EscalatorWarningIcon />,
          title: 'students',
          path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.data_students,
        },
      ],
    },
    {
      id: '10',
      icon: <AccountCircleIcon />,
      title: 'profile',
      routes: [
        {
          id: '11',
          icon: <ManageAccountsIcon />,
          title: 'setting',
          path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.settings,
        },
      ],
    },
  ],
}
