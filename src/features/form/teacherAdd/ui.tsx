import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Unstable_Grid2 as Grid,
} from '@mui/material'
import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { InputPhone, InputRegister } from '@/shared'

import { useTeacherForm } from './model'
import { TeacherFieldsType } from './types'

type PropsType = {
  addTeacher: (data: TeacherFieldsType) => void
}

export const FormAddTeacher: FC<PropsType> = ({ addTeacher }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useTeacherForm()

  const { t } = useTranslation('teachers')

  const onSubmit: SubmitHandler<TeacherFieldsType> = data => {
    addTeacher(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader
          title={t('L_create_teacher')}
          subheader={
            <Alert severity="info" color="info">
              {t('L_create_teacher_info')}
            </Alert>
          }
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ pr: 2, pl: 2 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <InputRegister
                  label={t('L_email')}
                  register={register('email')}
                  required
                  messageError={errors.email && errors.email.message}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputRegister
                  label={t('L_fname')}
                  register={register('fname')}
                  required
                  messageError={errors.fname && errors.fname.message}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputRegister
                  label={t('L_name')}
                  register={register('name')}
                  required
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
                  required
                  messageError={errors.phone && errors.phone.message}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button type={'submit'} variant="contained">
            {t('L_add')}
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}
