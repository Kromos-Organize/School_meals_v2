import { TableCell, TableHead, TableRow } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const LogsTableHead = () => {
  const { t } = useTranslation('logs')

  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">{t('L_date')}</TableCell>
        <TableCell align="center">{t('L_actions')}</TableCell>
      </TableRow>
    </TableHead>
  )
}
