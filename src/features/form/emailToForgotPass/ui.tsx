import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { Alert, Box, Button, InputAdornment, Stack, SvgIcon } from '@mui/material'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { InputRegister } from '@/shared'

import { useForgotPasswordForm, useForgotPasswordFormMutate } from './model'
import { RecoveryPasswordType } from './types'

export const FormForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForgotPasswordForm()

  //const { push } = useRouter()
  const { t } = useTranslation('forgot_password')

  //const { data: session } = useSession()
  const { mutate: saveChanged } = useForgotPasswordFormMutate()

  const onSubmit: SubmitHandler<RecoveryPasswordType> = data => {
    saveChanged(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <InputRegister
          label={t('F_forgot_password_email')} //
          register={register('email')}
          messageError={errors.email && errors.email.message}
          fullWidth={true}
          InputProps={{
            endAdornment: (
              <InputAdornment position={'end'}>
                <SvgIcon>
                  <EnvelopeIcon />
                </SvgIcon>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Box>
        <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained">
          {t('F_forgot_password_continue')}
        </Button>
        <Alert color="info" severity="info" sx={{ mt: 3 }}>
          <div>
            {t('F_helper')} - <b>krakenHRI@gmail.com</b>
          </div>
        </Alert>
      </Box>
    </form>
  )
}
