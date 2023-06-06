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

import { InputRegister, InputSelect, ValueSelectType } from '@/shared'

import { useStudentForm } from './model'
import { StudentFieldsType } from './types'

type PropsType = {
  classes: ValueSelectType[]
  addStudent: (data: StudentFieldsType) => void
}

export const FormAddStudent: FC<PropsType> = ({ classes, addStudent }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useStudentForm()

  const { t } = useTranslation('students')

  const onSubmit: SubmitHandler<StudentFieldsType> = data => {
    addStudent(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader
          title={t('L_add_student')}
          subheader={
            <Alert severity="info" color="info">
              {t('L_create_student_info')}
            </Alert>
          }
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ pr: 2, pl: 2 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <InputSelect
                  list={classes}
                  label={t('L_class')}
                  register={register('class_id')}
                  required
                  messageError={errors.class_id && errors.class_id.message}
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
