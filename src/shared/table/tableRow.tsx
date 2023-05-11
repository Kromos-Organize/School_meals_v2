import HowToRegIcon from '@mui/icons-material/HowToReg'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'
import { Button, ButtonGroup } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { StyledTableCell, StyledTableRow } from './headerRow'

type PropsType = {
  user: UserModerationType
}

export const Row: FC<PropsType> = memo(({ user }) => {
  return <StyledTableRow></StyledTableRow>
})

Row.displayName = 'Row'
