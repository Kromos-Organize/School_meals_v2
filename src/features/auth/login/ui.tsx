import { yupResolver } from '@hookform/resolvers/yup'
import LockIcon from '@mui/icons-material/Lock'
import MailIcon from '@mui/icons-material/Mail'
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  InputAdornment,
  InputLabel,
  Link,
} from '@mui/material'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { BtnLink, HiddenBlock, InputRegister, navModel, swalAlert } from '@/shared'

import { LoginSchema } from './config'
import { submitLogin } from './model'
import styles from './styles.module.scss'
import { LoginFieldsType } from './types'

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFieldsType>({
    defaultValues: {
      email: '',
      password: '',
      isAdminDev: false,
    },
    resolver: yupResolver(LoginSchema),
  })

  const { t } = useTranslation('login')
  const router = useRouter()
  const isLoading = false //! todo временно

  const onSubmit: SubmitHandler<LoginFieldsType> = data => {
    submitLogin(data)
      .then(path => {
        router.push(path)
      })
      .catch(message => swalAlert({ title: t('L_error_login'), html: message, icon: 'error' }))
  }

  return (
    <div className={styles.window}>
      <div className={styles.header}>{t('L_enter_data')}</div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.main}>
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
          label={t('L_enterPass')}
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

        <div className={styles.forgotPass}>
          <HiddenBlock>
            <InputLabel>
              <div className={styles.checkbox}>
                <Checkbox {...register('isAdminDev')} />
                <p tabIndex={-1}>Разработчик</p>
              </div>
            </InputLabel>
          </HiddenBlock>

          <Link href={`${navModel.MAIN_ROUTE.auth}${navModel.AUTH_ROUTE.forgotPass}`}>
            <p>{t('L_forgotPass')}</p>
          </Link>
        </div>

        <Box>
          <Button fullWidth size={'medium'} color={'secondary'} type="submit" variant={'contained'}>
            {t('L_enter')}
          </Button>

          <div className={styles.paragraph}>
            <p>{t('L_isLogIn')}</p>
          </div>

          <BtnLink
            href={`${navModel.MAIN_ROUTE.auth}${navModel.AUTH_ROUTE.registration}`}
            color={'secondary'}
          >
            {isLoading ? (
              <CircularProgress size={20} style={{ color: 'white' }} />
            ) : (
              t('L_registered')
            )}
          </BtnLink>
        </Box>
      </form>
    </div>
  )
}
