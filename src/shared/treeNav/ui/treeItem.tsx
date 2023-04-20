import TreeItem from '@material-ui/lab/TreeItem'
import { useRouter } from 'next/router'

import { TransitionComponent, useTreeItemsStyles } from '../lib'
import { StyledTreeItemProps } from '../types'

export const StyledTreeItem = (props: StyledTreeItemProps) => {
  const classes = useTreeItemsStyles()

  const router = useRouter()
  const { nodeId, text, route, handleToggle, handleSelect, ...other } = props

  const transfer = () => {
    handleToggle?.(nodeId)
    handleSelect?.(nodeId)
    route && router.push(props.route)
  }

  return (
    <TreeItem
      nodeId={nodeId}
      onClick={transfer}
      TransitionComponent={TransitionComponent}
      label={text}
      classes={{ ...classes }}
      {...other}
    />
  )
}
