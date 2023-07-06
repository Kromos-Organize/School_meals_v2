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

import { useMenuTypeForm } from './model'
import { MenuTypeFieldsType } from './types'

type PropsType = {
  addTypeMenu: (data: MenuTypeFieldsType) => void
}

export const FormAddTypeMenu: FC<PropsType> = ({ addTypeMenu }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useMenuTypeForm()

  const { t } = useTranslation('menus')

  const onSubmit: SubmitHandler<MenuTypeFieldsType> = data => {
    addTypeMenu(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader
          title={t('L_create_menu_type')}
          subheader={
            <Alert severity="info" color="info">
              {t('L_create_menu_type_info')}
            </Alert>
          }
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ pr: 2, pl: 2 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={12} lg={12} xl={12}>
                <InputRegister
                  label={t('L_menu_type')}
                  register={register('type_menu')}
                  required
                  messageError={errors.type_menu && errors.type_menu.message}
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
