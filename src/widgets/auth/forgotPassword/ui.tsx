import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { FormForgotPassword } from '@/features'
import { AuthHeader, navModel } from '@/shared'

export const ForgotPasswordWidget = () => {
  const { t } = useTranslation('forgot_password')

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
            title={t('F_forgot_password')}
            text={t('F_return_to_the_login_page')}
            textLink={t('F_account_login')}
            href={navModel.MAIN_ROUTE.auth + navModel.AUTH_ROUTE.login}
          />

          <FormForgotPassword />
        </div>
      </Box>
    </Box>
  )
}
