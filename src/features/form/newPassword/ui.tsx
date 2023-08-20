import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import { Alert, Box, Button, InputAdornment, Stack, SvgIcon } from '@mui/material'
import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { InputRegister } from '@/shared'

import { useNewPasswordForm, useNewPasswordFormMutate } from './model'
import { RecoveryNewPasswordType } from './types'

type PropsType = {
  recoveryCode: string
}
export const FormNewPassword: FC<PropsType> = ({ recoveryCode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useNewPasswordForm()

  const { t } = useTranslation('new_password')

  const { mutate: saveChanged } = useNewPasswordFormMutate()

  const onSubmit: SubmitHandler<RecoveryNewPasswordType> = ({ newPassword }) => {
    saveChanged({ recoveryCode, newPassword })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <InputRegister
          label={t('N_pass')}
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
          label={t('N_confPass')}
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
          {t('N_continue')}
        </Button>
        <Alert color="info" severity="info" sx={{ mt: 3 }}>
          <div>
            {t('N_helper')} - <b>krakenHRI@gmail.com</b>
          </div>
        </Alert>
      </Box>
    </form>
  )
}
