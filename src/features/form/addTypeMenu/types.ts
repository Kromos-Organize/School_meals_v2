export type MenuType = {
  school_id: number
  type_id: number
  type_menu: string
}

export type MenuTypeFieldsType = Omit<MenuType, 'type_id'>
