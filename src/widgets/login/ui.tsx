import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { FormLogin } from '@/features'
import { AuthHeader, navModel } from '@/shared'

export const LoginWidget = () => {
  const { t } = useTranslation('login')

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
            title={t('L_Login')}
            text={t('L_no_account')}
            textLink={t('L_registered')}
            href={navModel.MAIN_ROUTE.auth + navModel.AUTH_ROUTE.registration}
          />

          <FormLogin />
        </div>
      </Box>
    </Box>
  )
}
