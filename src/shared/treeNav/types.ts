import { TreeItemProps } from '@material-ui/lab/TreeItem'

export type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string
  color?: string
  icon?: JSX.Element
  text: string
  route: string
  handleToggle?: (id: string) => void
  handleSelect?: (id: string) => void
}

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
