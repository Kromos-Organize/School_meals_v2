import { Box, Button } from '@mui/material'
import { signIn } from 'next-auth/react'
import { useTranslation } from 'react-i18next'

import { FormRegister } from '@/features'
import { AuthHeader, navModel } from '@/shared'

export const RegisterWidget = () => {
  const { t } = useTranslation('register')

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
            title={t('L_register')}
            text={t('L_have_account')}
            textLink={t('L_authorize')}
            href={navModel.MAIN_ROUTE.auth + navModel.AUTH_ROUTE.login}
          />
          <FormRegister />
        </div>
      </Box>
    </Box>
  )
}
