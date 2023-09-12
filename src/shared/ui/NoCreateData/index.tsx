import { Alert, AlertTitle, Typography } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type PropsType = {
  action: string
}

export const NoCreateData: FC<PropsType> = ({ action }) => {
  const { t } = useTranslation('no_create_data')

  return <Typography>{t(`L_${action}`)}</Typography>
}
