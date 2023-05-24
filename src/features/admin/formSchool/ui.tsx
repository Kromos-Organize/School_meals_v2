import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Unstable_Grid2 as Grid,
} from '@mui/material'
import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { InputRegister } from '@/shared'

import { useCreateSchoolMutate, useSchoolForm, useUpdateSchoolMutate } from './model'
import { SchoolFieldsType } from './types'

type PropsType = {
  school: SchoolFieldsType | null
}

export const FormSchool: FC<PropsType> = ({ school }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSchoolForm(school)

  const { t } = useTranslation('school')

  const { mutate: createSchool } = useCreateSchoolMutate()
  const { mutate: updateSchool } = useUpdateSchoolMutate()

  const onSubmit: SubmitHandler<SchoolFieldsType> = data => {
    school ? updateSchool(data) : createSchool(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader subheader={t('L_school_info_action')} title={t('L_school_data')} />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <InputRegister
                  label={t('L_schoolName')}
                  register={register('name')}
                  required
                  messageError={errors.name && errors.name.message}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputRegister
                  label={t('L_region')}
                  register={register('region')}
                  required
                  messageError={errors.name && errors.name.message}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputRegister
                  label={t('L_area')}
                  register={register('area')}
                  required
                  messageError={errors.name && errors.name.message}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputRegister
                  label={t('L_city')}
                  register={register('city')}
                  required
                  messageError={errors.name && errors.name.message}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputRegister
                  label={t('L_street')}
                  register={register('street')}
                  required
                  messageError={errors.name && errors.name.message}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <InputRegister
                  label={t('L_homeNumber')}
                  type={'number'}
                  register={register('homeNumber')}
                  required
                  messageError={errors.name && errors.name.message}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button type={'submit'} variant="contained">
            {t('L_save')}
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}
