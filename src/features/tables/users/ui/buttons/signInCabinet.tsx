import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { Tooltip, Button, SvgIcon } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type PropsType = {
  sign: () => void
}

export const SignInCabinet: FC<PropsType> = ({ sign }) => {
  const { t } = useTranslation('users')

  return (
    <Tooltip key="two" title={t('L_sign_in_cabinet')}>
      <Button color={'inherit'} onClick={sign}>
        <SvgIcon>
          <ArrowRightOnRectangleIcon />
        </SvgIcon>
      </Button>
    </Tooltip>
  )
}
