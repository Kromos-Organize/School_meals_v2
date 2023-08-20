import { Box } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { FormNewPassword } from '@/features'
import { AuthHeader, navModel } from '@/shared'

type PropsType = {
  recoveryCode: string
}
export const NewPasswordWidget: FC<PropsType> = ({ recoveryCode }) => {
  const { t } = useTranslation('new_password')

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        flex: '1 1 auto',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: 550,
          px: 3,
          py: '100px',
          width: '100%',
        }}
      >
        <div>
          <AuthHeader
            title={t('N_new_password')}
            text={t('N_return_to_the_login_page')}
            textLink={t('N_account_login')}
            href={navModel.MAIN_ROUTE.auth + navModel.AUTH_ROUTE.login}
          />

          <FormNewPassword recoveryCode={recoveryCode} />
        </div>
      </Box>
    </Box>
  )
}
