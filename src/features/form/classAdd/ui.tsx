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

import { InputRegister } from '@/shared'

import { useClassForm } from './model'
import { ClassFieldsType } from './types'

type PropsType = {
  addClass: (data: ClassFieldsType) => void
}

export const FormAddClass: FC<PropsType> = ({ addClass }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useClassForm()

  const { t } = useTranslation('classes')

  const onSubmit: SubmitHandler<ClassFieldsType> = data => {
    addClass(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader
          title={t('L_create_class')}
          subheader={
            <Alert severity="info" color="info">
              {t('L_create_class_info')}
            </Alert>
          }
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ pr: 2, pl: 2 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <InputRegister
                  label={t('L_number')}
                  register={register('number')}
                  required
                  messageError={errors.number && errors.number.message}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputRegister
                  label={t('L_type')}
                  register={register('type')}
                  required
                  messageError={errors.type && errors.type.message}
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
