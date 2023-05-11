import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { StyledTableCell } from '@/shared'

import { useGetListModerationQuery } from '../model'

import { Row } from './row'

export const TableModeration = memo(() => {
  const { t } = useTranslation('moderation')
  const { data: listUser } = useGetListModerationQuery()

  const list = listUser ? listUser.map(user => <Row key={user.id} user={user} />) : []

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">{t('L_phone')}</StyledTableCell>
            <StyledTableCell align="center">{t('L_actions')}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{list}</TableBody>
      </Table>
    </TableContainer>
  )
})
