import { TableCell, TableRow } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const UsersTableHead = () => {
  const { t } = useTranslation('users')

  return (
    <TableRow>
      <TableCell align="center">ID</TableCell>
      <TableCell align="center">{t('L_full_name')}</TableCell>
      <TableCell align="center">{t('L_email')}</TableCell>
      <TableCell align="center">{t('L_phone')}</TableCell>
      <TableCell align="center">{t('L_position')}</TableCell>
      <TableCell align="center">{t('L_status')}</TableCell>
      <TableCell align="center">{t('L_actions')}</TableCell>
    </TableRow>
  )
}
