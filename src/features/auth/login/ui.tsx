import LockIcon from '@mui/icons-material/Lock'
import MailIcon from '@mui/icons-material/Mail'
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
} from '@mui/material'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { HiddenBlock, InputRegister, navModel } from '@/shared';

import { useLoginForm, useLoginMutate } from './model'
import { LoginFieldsType } from './types'

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm()

  const { mutate: login, isLoading } = useLoginMutate()
  const { t } = useTranslation('login')

  const onSubmit: SubmitHandler<LoginFieldsType> = data => login(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          label={t('L_enterPass')}
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
          {isLoading ? <CircularProgress size={26} style={{ color: 'white' }} /> : t('L_enter')}
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
