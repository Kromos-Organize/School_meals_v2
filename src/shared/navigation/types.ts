type NestedRouteType = {
  id: string
  icon: JSX.Element
  title: string
  path: string
}

export type NavigationOfficeType = {
  id: string
  icon: JSX.Element
  title: string
  routes?: NestedRouteType[]
  path?: string
}

export type RoleType = 'S_ADMIN' | 'ADMIN'

export type NavigationDataType = {
  [key in RoleType]: NavigationOfficeType[]
}
