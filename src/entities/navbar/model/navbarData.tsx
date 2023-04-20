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

import { NavigationDataType } from '@/shared/navigation'
import { PATH, PREFIX } from '@/shared/navigation/model'

export const navigationData: NavigationDataType = {
  S_ADMIN: [
    // админ проекта
    { id: '1', icon: <SchoolIcon />, title: 'schools', path: PREFIX.s_admin + PATH.schools },
    {
      id: '2',
      icon: <HowToRegIcon />,
      title: 'moderation',
      path: PREFIX.s_admin + PATH.moderation,
    },
    { id: '3', icon: <NoteIcon />, title: 'logs', path: PREFIX.s_admin + PATH.logs },
    {
      id: '4',
      icon: <AccountCircleIcon />,
      title: 'profile',
      routes: [
        {
          id: '5',
          icon: <ManageAccountsIcon />,
          title: 'setting',
          path: PREFIX.s_admin + PATH.profile + PATH.profileSettings,
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
          path: PREFIX.admin + PATH.meals + PATH.autoCalc,
        },
        {
          id: '3',
          icon: <SignLanguageIcon />,
          title: 'manual_calc',
          path: PREFIX.admin + PATH.meals + PATH.manualCalc,
        },
        {
          id: '4',
          icon: <HistoryIcon />,
          title: 'history_calc',
          path: PREFIX.admin + PATH.meals + PATH.historyCalc,
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
          path: PREFIX.admin + PATH.schoolData,
        },
        {
          id: '7',
          icon: <AssignmentIndIcon />,
          title: 'teachers',
          path: PREFIX.admin + PATH.schoolData + PATH.teachers,
        },
        {
          id: '8',
          icon: <DashboardIcon />,
          title: 'classes',
          path: PREFIX.admin + PATH.schoolData + PATH.classes,
        },
        {
          id: '9',
          icon: <EscalatorWarningIcon />,
          title: 'students',
          path: PREFIX.admin + PATH.schoolData + PATH.students,
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
          path: PREFIX.admin + PATH.profile + PATH.profileSettings,
        },
      ],
    },
  ],
}
