import { ButtonGroup } from '@mui/material'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { StyledTableCell, StyledTableRow } from '@/shared'

import { UserModerationType } from '../types'

import { ButtonsAction } from './buttonsAction'

type PropsType = {
  user: UserModerationType
}

export const Row: FC<PropsType> = memo(({ user }) => {
  const { t } = useTranslation('moderation')

  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row" align="center">
        {user.id}
      </StyledTableCell>
      <StyledTableCell component="th" scope="row" align="center">
        {user.email}
      </StyledTableCell>
      <StyledTableCell component="th" scope="row" align="center">
        {user.phone}
      </StyledTableCell>
      <StyledTableCell component="th" scope="row" align="center">
        <ButtonGroup variant="outlined" size="small" aria-label="small outlined button group">
          <ButtonsAction id={user.id} />
        </ButtonGroup>
      </StyledTableCell>
    </StyledTableRow>
  )
})
