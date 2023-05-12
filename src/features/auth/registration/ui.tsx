import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import LockIcon from '@mui/icons-material/Lock'
import MailIcon from '@mui/icons-material/Mail'
import { Box, Button, CircularProgress, InputAdornment, Stack } from '@mui/material'
import { memo } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { InputRegister } from '@/shared'

import { useRegisterForm, useRegisterMutate } from './model'
import styles from './styles.module.scss'
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
    <form onSubmit={handleSubmit(onSubmit)} className={styles.main}>
      <Stack spacing={3}>
        <InputRegister
          label={t('L_enterEmail')}
          register={register('email')}
          messageError={errors.email && errors.email.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position={'end'}>
                <MailIcon />
              </InputAdornment>
            ),
          }}
        />
        <InputRegister
          label={t('L_pass')}
          register={register('password')}
          messageError={errors.password && errors.password.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position={'end'}>
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
        <InputRegister
          label={t('L_confPass')}
          register={register('confirmPassword')}
          messageError={errors.confirmPassword && errors.confirmPassword.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position={'end'}>
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
        <InputRegister
          label={t('L_enterPhone')}
          register={register('phone')}
          messageError={errors.phone && errors.phone.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position={'end'}>
                <LocalPhoneIcon />
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
