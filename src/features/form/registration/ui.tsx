import { EnvelopeIcon, LockClosedIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { Box, Button, CircularProgress, InputAdornment, Stack, SvgIcon } from '@mui/material'
import { memo } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { InputRegister } from '@/shared'

import { useRegisterForm, useRegisterMutate } from './model'
import { RegistrationFieldsType } from './types'

export const FormRegister = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useRegisterForm()

  const { mutate: registration, isLoading } = useRegisterMutate()
  const { t } = useTranslation('register')

  const onSubmit: SubmitHandler<RegistrationFieldsType> = data => registration(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <InputRegister
          label={t('L_enterEmail')}
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
        <InputRegister
          label={t('L_pass')}
          type={'password'}
          register={register('password')}
          messageError={errors.password && errors.password.message}
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
        <InputRegister
          label={t('L_confPass')}
          type={'password'}
          register={register('confirmPassword')}
          messageError={errors.confirmPassword && errors.confirmPassword.message}
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
        <InputRegister
          label={t('L_enterPhone')}
          register={register('phone')}
          messageError={errors.phone && errors.phone.message}
          fullWidth={true}
          InputProps={{
            endAdornment: (
              <InputAdornment position={'end'}>
                <SvgIcon>
                  <PhoneIcon />
                </SvgIcon>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Box>
        <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained">
          {isLoading ? <CircularProgress size={26} style={{ color: 'white' }} /> : t('L_continue')}
        </Button>
      </Box>
    </form>
  )
})
