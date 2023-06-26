import { Alert, Box, Button, Card, CardActions, CardContent, CardHeader } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid'
import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { InputRegister } from '@/shared'

import { useS_AdminChangeForm, useChangeS_AdminMutate } from './model'
import { S_AdminType, S_AdminChangeFieldType } from './types'

type PropsType = {
  admin: S_AdminType
}

export const FormChangeS_Admin: FC<PropsType> = ({ admin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useS_AdminChangeForm(admin)

  const { t } = useTranslation('admin_setting')
  const { mutate: saveChanged } = useChangeS_AdminMutate(admin.id)

  const onSubmit: SubmitHandler<S_AdminChangeFieldType> = data => saveChanged(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader
          subheader={
            <Alert severity="info" color="info">
              {t('L_change_data_admin')}
            </Alert>
          }
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ pr: 2, pl: 2 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <InputRegister
                  label={t('L_fname')}
                  register={register('fname')}
                  messageError={errors.fname && errors.fname.message}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputRegister
                  label={t('L_name')}
                  register={register('name')}
                  messageError={errors.name && errors.name.message}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputRegister
                  label={t('L_position')}
                  register={register('position')}
                  messageError={errors.position && errors.position.message}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputRegister
                  label={t('L_chat_number')}
                  register={register('chat_number')}
                  messageError={errors.chat_number && errors.chat_number.message}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button type={'submit'} variant="contained">
            {t('L_save')}
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}
