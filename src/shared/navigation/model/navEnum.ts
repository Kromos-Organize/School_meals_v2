export enum MAIN_ROUTE {
  home = '/',
  s_admin = '/s_admin',
  admin = '/admin',
  auth = '/auth',
}

export enum AUTH_ROUTE {
  login = '/login',
  registration = '/registration',
  forgotPass = '/forgotPass',
}

export enum S_ADMIN_ROUTE {
  schools = '/schools',
  moderation = '/moderation',
  logs = '/logs',
  settings = '/profile/settings',
}

export enum ADMIN_ROUTE {
  meals_autoCalc = '/meals/calc/auto',
  meals_manualCalc = '/meals/calc/manual',
  meals_historyCalc = '/meals/calc/history',

  data_school = '/meals/data/school',
  data_teachers = '/meals/data/teachers',
  data_classes = '/meals/data/classes',
  data_students = '/meals/data/students',

  settings = '/profile/settings',
}
