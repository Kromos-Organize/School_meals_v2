import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'
import { Button, SvgIcon } from '@mui/material'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const ComeBack: FC = () => {
  const { back } = useRouter()
  const { t } = useTranslation('navData')

  return (
    <Button
      onClick={back}
      startIcon={
        <SvgIcon>
          <ArrowUturnLeftIcon />
        </SvgIcon>
      }
      variant="contained"
    >
      {t('L_come_back')}
    </Button>
  )
}
