import { Alert, AlertTitle, Link, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { navModel } from '@/shared/navigation'

export const InfoNoSchool = () => {
  const { t } = useTranslation('info_no_school')

  return (
    <Alert variant="filled" color={'warning'} severity="warning" sx={{ mt: 10, color: '#fff' }}>
      <AlertTitle>{t('L_warning')}</AlertTitle>
      <Typography>
        {t('L_before_work')}
        <Link href={navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.data_school}>
          <strong>{t('L_add_school')}</strong>
        </Link>
      </Typography>
    </Alert>
  )
}
