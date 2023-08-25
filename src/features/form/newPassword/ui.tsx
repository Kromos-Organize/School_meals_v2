import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import { Alert, Box, Button, InputAdornment, Stack, SvgIcon } from '@mui/material'
import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { InputRegister } from '@/shared'

import { useNewPasswordForm, useNewPasswordMutate } from './model'
import { NewPasswordType, RecoveryCodeType } from './types'

type PropsType = RecoveryCodeType
export const FormNewPassword: FC<PropsType> = ({ recoveryCode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useNewPasswordForm()

  const { t } = useTranslation('new_password')

  const { mutate: sendNewPassword } = useNewPasswordMutate()

  const onSubmit: SubmitHandler<NewPasswordType> = ({ newPassword }) => {
    sendNewPassword({ recoveryCode, newPassword })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <InputRegister
          label={t('L_pass')}
          type={'password'}
          register={register('newPassword')}
          messageError={errors.newPassword && errors.newPassword.message}
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
        <InputRegister
          label={t('L_confPass')}
          type={'password'}
          required
          register={register('confirmNewPassword')}
          messageError={errors.confirmNewPassword && errors.confirmNewPassword.message}
          fullWidth={true}
          InputProps={{
            endAdornment: (
              <InputAdornment position={'end'}>
                <SvgIcon>
                  <LockClosedIcon />
                </SvgIcon>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Box>
        <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained">
          {t('L_continue')}
        </Button>
        <Alert color="info" severity="info" sx={{ mt: 3 }}>
          <div>
            {t('L_helper')} - <b>krakenHRI@gmail.com</b>
          </div>
        </Alert>
      </Box>
    </form>
  )
}
