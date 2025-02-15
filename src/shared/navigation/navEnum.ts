export enum MAIN_ROUTE {
  home = '/',
  s_admin = '/s_admin',
  admin = '/admin',
  auth = '/auth',
}

export enum AUTH_ROUTE {
  login = '/login',
  registration = '/registration',
  forgotPass = '/forgot_password',
  newPassword = '/new-password',
}

export enum S_ADMIN_ROUTE {
  users = '/users',
  logs = '/logs',
  settings = '/profile/settings',
}

export enum ADMIN_ROUTE {
  meals_calculation = '/meals/calc/calculation',
  meals_historyCalc = '/meals/calc/history',
  meals_typeMenu = '/meals/calc/type_menu',

  data_school = '/data/school',
  data_teachers = '/data/teachers',
  data_classes = '/data/classes',
  data_students = '/data/students',

  settings = '/profile/settings',
}
