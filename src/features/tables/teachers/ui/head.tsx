import { TableCell, TableHead, TableRow } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const TeachersTableHead = () => {
  const { t } = useTranslation('teachers')

  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">ID</TableCell>
        <TableCell align="center">{t('L_teacher')}</TableCell>
        <TableCell align="center">{t('L_email')}</TableCell>
        <TableCell align="center">{t('L_class')}</TableCell>
        <TableCell align="center">{t('L_actions')}</TableCell>
      </TableRow>
    </TableHead>
  )
}
