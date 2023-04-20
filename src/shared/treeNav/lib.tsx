import Collapse from '@material-ui/core/Collapse'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { TransitionProps } from '@material-ui/core/transitions'
import { animated, useSpring } from '@react-spring/web'

export function TransitionComponent(props: TransitionProps) {
  const style = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
  })

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  )
}

export const useTreeItemsStyles = makeStyles(() =>
  createStyles({
    root: {
      '&:hover > $content': {
        backgroundColor: 'transparent',
        color: '#303f66',
      },
      '&:focus > $content, &$selected > $content': {
        backgroundColor: 'transparent',
      },
      '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
        backgroundColor: 'transparent!important',
      },
      '&$expanded > $content': {
        borderLeft: `3px solid 303f66`,
        color: '#303f66',
      },
    },
    content: {
      padding: '10px 10px 0 10px',
      cursor: 'pointer',
      color: '#e6e7e2',
    },
    selected: {
      color: '#303f66',
    },
    expanded: {},
    iconContainer: {
      marginRight: 10,
      padding: '5px 0',
      '& $svg': {
        fontSize: 26,
      },
    },
    label: {
      fontSize: 18,
    },
    group: {
      marginLeft: 18,
      paddingLeft: 18,
      borderLeft: `2px solid #303f66`,
      '& $selected $content $label:focus, & $selected $content $label:hover, & $selected $content $label:active':
        {
          backgroundColor: 'transparent!important',
        },
      '& $content $label:hover, & $content $label:focus,': {
        backgroundColor: 'transparent!important',
      },
      '& $content': {
        paddingLeft: 0,
      },
    },
  })
)
