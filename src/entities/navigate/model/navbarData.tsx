import { NavigationDataType, navModel } from '@/shared/navigation'

export const navigationData: NavigationDataType = {
  S_ADMIN: [
    // админ проекта
    {
      id: '1',
      icon: <></>,
      title: 'schools',
    },
    {
      id: '2',
      icon: <></>,
      title: 'moderation',
    },
    {
      id: '3',
      icon: <></>,
      title: 'logs',
      path: navModel.MAIN_ROUTE.s_admin + navModel.S_ADMIN_ROUTE.logs,
    },
    {
      id: '4',
      icon: <></>,
      title: 'profile',
      routes: [
        {
          id: '5',
          icon: <></>,
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
      icon: <></>,
      title: 'calculation',
      routes: [
        //добавить потом иконки
        {
          id: '2',
          icon: <></>,
          title: 'auto_calc',
          path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.meals_autoCalc,
        },
        {
          id: '3',
          icon: <></>,
          title: 'manual_calc',
          path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.meals_manualCalc,
        },
        {
          id: '4',
          icon: <></>,
          title: 'history_calc',
          path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.meals_historyCalc,
        },
        {
          id: '5',
          icon: <></>,
          title: 'type_menu',
          path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.meals_typeMenu,
        },
      ],
    },
    {
      id: '5',
      icon: <></>,
      title: 'school',
      routes: [
        {
          id: '6',
          icon: <></>,
          title: 'schoolData',
          path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.data_school,
        },
        {
          id: '7',
          icon: <></>,
          title: 'teachers',
          path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.data_teachers,
        },
        {
          id: '8',
          icon: <></>,
          title: 'classes',
          path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.data_classes,
        },
        {
          id: '9',
          icon: <></>,
          title: 'students',
          path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.data_students,
        },
      ],
    },
    {
      id: '10',
      icon: <></>,
      title: 'profile',
      routes: [
        {
          id: '11',
          icon: <></>,
          title: 'setting',
          path: navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.settings,
        },
      ],
    },
  ],
}
