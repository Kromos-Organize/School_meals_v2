import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  InputAdornment,
  InputLabel,
  Link,
  Stack,
  SvgIcon,
} from '@mui/material'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { HiddenBlock, InputRegister, navModel, swalAlert } from '@/shared'

import { useLoginForm } from './model'
import { LoginFieldsType } from './types'

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm()

  const { push } = useRouter()
  const { t } = useTranslation('login')

  const { data: session } = useSession()

  useEffect(() => {
    if (session?.user.role) {
      const path = `/${session.user.role.toLowerCase()}/profile/settings`

      push(path)
    }
  }, [session?.user])

  const onSubmit: SubmitHandler<LoginFieldsType> = async data => {
    const res = await signIn('auth_login_user', {
      ...data,
      redirect: false,
    })

    if (res?.error) {
      swalAlert({ title: t('L_error_login'), html: res?.error, icon: 'error' })
    }
  }

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
          label={t('L_enterPass')}
          type={'password'}
          register={register('password')}
          fullWidth={true}
          messageError={errors.password && errors.password.message}
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

      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 3, display: 'flex', justifyContent: 'space-between' }}
      >
        <HiddenBlock>
          <InputLabel>
            <Stack direction="row">
              <Checkbox {...register('isAdminDev')} />
              <p tabIndex={-1}>Разработчик</p>
            </Stack>
          </InputLabel>
        </HiddenBlock>

        <Link
          href={`${navModel.MAIN_ROUTE.auth}${navModel.AUTH_ROUTE.forgotPass}`}
          underline="hover"
          variant="subtitle2"
        >
          <p>{t('L_forgotPass')}</p>
        </Link>
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
