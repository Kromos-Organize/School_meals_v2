import { Alert, AlertTitle, Link, Typography } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { navModel } from '@/shared/navigation'

type PropsType = {
  action: string
  link: string
}

export const InfoNoData: FC<PropsType> = ({ action, link }) => {
  const { t } = useTranslation('info_no_data')

  return (
    <Alert color={'warning'} severity="warning" sx={{ mt: 10 }}>
      <AlertTitle>{t('L_warning')}</AlertTitle>
      <Typography>
        {t('L_before_work')}
        <Link href={navModel.MAIN_ROUTE.admin + link}>
          <strong>{t(`L_${action}`)}</strong>
        </Link>
      </Typography>
    </Alert>
  )
}
