import { yupResolver } from '@hookform/resolvers/yup'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import LockIcon from '@mui/icons-material/Lock'
import MailIcon from '@mui/icons-material/Mail'
import { Box, Button, CircularProgress, InputAdornment } from '@mui/material'
import { memo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { BtnLink, InputComponent, InputRegister } from '@/shared'

import { MAIN_ROUTE, AUTH_ROUTE } from '@/shared/navigation/model'

import { registerSchema } from './config'
import styles from './styles.module.scss'
import { RegistrationFieldsType } from './types'

export const FormRegister = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFieldsType>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    },
    resolver: yupResolver(registerSchema),
  })

  const { t } = useTranslation('register')
  const isLoading = false //! todo временно

  const onSubmit: SubmitHandler<RegistrationFieldsType> = data => {
    console.log(data)
  }

  return (
    <div className={styles.window}>
      <div className={styles.wrapper__header}>{t('L_register')}</div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper__main}>
        <InputRegister
          label={t('L_enterEmail')}
          register={register('email')}
          messageError={errors.email && errors.email.message}
          className={styles.input}
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
          className={styles.input}
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
          className={styles.input}
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
          className={styles.input}
          InputProps={{
            endAdornment: (
              <InputAdornment position={'end'}>
                <LocalPhoneIcon />
              </InputAdornment>
            ),
          }}
        />

        <Box>
          <Button fullWidth size={'medium'} color={'secondary'} type="submit" variant={'contained'}>
            {t('L_createAcc')}
          </Button>

          <div className={styles.wrapper__paragraph}>
            <p>{t('L_IsAcc')}</p>
          </div>

          <BtnLink href={`${MAIN_ROUTE.auth}${AUTH_ROUTE.login}`} color={'secondary'}>
            {isLoading ? (
              <CircularProgress size={20} style={{ color: 'white' }} />
            ) : (
              t('L_enterAcc')
            )}
          </BtnLink>
        </Box>
      </form>
    </div>
  )
})
