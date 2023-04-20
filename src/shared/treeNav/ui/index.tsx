import TreeView from '@material-ui/lab/TreeView'
import { FC, useState } from 'react'

import { NavigationOfficeType } from '../types'

import { StyledTreeItem } from './treeItem'

export type RouteButtonType = {
  navigation: NavigationOfficeType[]
}

export const TreeNav: FC<RouteButtonType> = ({ navigation }) => {
  const [expanded, setExpanded] = useState<string[]>([])
  const [selected, setSelected] = useState<string[]>([])

  const handleSelect = (id: string) => !selected.includes(id) && setSelected([id])
  const handleToggle = (id: string) => !expanded.includes(id) && setExpanded([id])

  const navigate = navigation.map(el => (
    <StyledTreeItem
      key={el.id}
      nodeId={el.id}
      route={el.path ? el.path : ''}
      icon={el.icon}
      text={el.title}
      handleToggle={handleToggle}
    >
      {el.routes?.length &&
        el.routes.map(nested => (
          <StyledTreeItem
            key={nested.id}
            nodeId={nested.id}
            route={nested.path}
            text={nested.title}
            icon={nested.icon}
            handleSelect={handleSelect}
          />
        ))}
    </StyledTreeItem>
  ))

  return (
    <TreeView expanded={expanded} selected={selected}>
      {navigate}
    </TreeView>
  )
}
