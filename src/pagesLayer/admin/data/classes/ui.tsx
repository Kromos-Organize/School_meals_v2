import { Unstable_Grid2 as Grid, Stack } from '@mui/material'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ContentHeader, MainContainerPage, Meta } from '@/shared'
import { AddClass } from '@/widgets'

export const ClassesPage: FC = memo(() => {
  const { t } = useTranslation('classes')

  return (
    <>
      <Meta title={'Классы'} />
      <MainContainerPage>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <ContentHeader title={t('L_title')} />
          <AddClass />
        </Stack>

        <Grid container spacing={3}>
          <Grid xs={12} md={6} lg={8}></Grid>
        </Grid>
      </MainContainerPage>
    </>
  )
})
