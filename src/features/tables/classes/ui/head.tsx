import { TableCell, TableHead, TableRow } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const ClassesTableHead = () => {
  const { t } = useTranslation('classes')

  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">{t('L_fill_indicator')}</TableCell>
        <TableCell align="center">{t('L_number')}</TableCell>
        <TableCell align="center">{t('L_students_number')}</TableCell>
        <TableCell align="center">{t('L_responsible_teacher')}</TableCell>
        <TableCell align="center">{t('L_actions')}</TableCell>
      </TableRow>
    </TableHead>
  )
}
