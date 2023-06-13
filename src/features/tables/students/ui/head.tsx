import { TableCell, TableHead, TableRow } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const StudentsTableHead = () => {
  const { t } = useTranslation('students')

  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">ID</TableCell>
        <TableCell align="center">{t('L_fullName')}</TableCell>
        <TableCell align="center">{t('L_class')}</TableCell>
        <TableCell align="center">{t('L_largeFamilies')}</TableCell>
        <TableCell align="center">{t('L_phone_parents')}</TableCell>
        <TableCell align="center">{t('L_actions')}</TableCell>
      </TableRow>
    </TableHead>
  )
}
