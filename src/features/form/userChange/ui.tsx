import { Alert, Box, Button, Card, CardActions, CardContent, CardHeader } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid'
import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { InputDates, InputPhone, InputRegister } from '@/shared'

import { useChangeUserMutate, useUserChangeForm } from './model'
import { TeacherChangeFieldType, UserEmployeeType } from './types'

type PropsType = {
  user: UserEmployeeType
  isGoBack: boolean
}

export const FormChangeUser: FC<PropsType> = ({ user, isGoBack }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, defaultValues },
  } = useUserChangeForm(user)

  const { t } = useTranslation('teachers')
  const { mutate: saveChanged } = useChangeUserMutate(user.id, isGoBack)

  const onSubmit: SubmitHandler<TeacherChangeFieldType> = data => saveChanged(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader
          subheader={
            <Alert severity="info" color="info">
              {t('L_change_data_teacher')}
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
                  label={t('L_lname')}
                  register={register('lname')}
                  messageError={errors.lname && errors.lname.message}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputPhone
                  label={t('L_phone')}
                  register={register('phone')}
                  messageError={errors.phone && errors.phone.message}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputDates
                  name={'birthday'}
                  control={control}
                  defaultValue={defaultValues?.birthday}
                  messageError={errors.phone && errors.phone.message}
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
