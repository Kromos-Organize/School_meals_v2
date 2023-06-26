import { Stack } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { S_AdminType, FormChangeS_Admin } from '@/features'
import { ContentHeader, MainContainerPage, Meta } from '@/shared'

type PropsType = {
  admin: S_AdminType
}

export const ChangeSAdminPage: FC<PropsType> = ({ admin }) => {
  const { t } = useTranslation('admin_setting')

  return (
    <>
      <Meta title={'Update Admin'} />
      <MainContainerPage>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <ContentHeader title={t('L_title_change')} />
        </Stack>
        <Grid container spacing={3}>
          <Grid xs={12} md={6} lg={8}>
            <FormChangeS_Admin admin={admin} />
          </Grid>
        </Grid>
      </MainContainerPage>
    </>
  )
}
