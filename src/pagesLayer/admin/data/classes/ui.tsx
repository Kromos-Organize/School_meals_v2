import { Unstable_Grid2 as Grid } from '@mui/material'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ContentHeader, MainContainerPage, Meta } from '@/shared'

export const ClassesPage: FC = memo(() => {
  const { t } = useTranslation('classes')

  return (
    <>
      <Meta title={'Классы'} />
      <MainContainerPage>
        <ContentHeader title={t('L_title')} />
        <Grid container spacing={3}>
          <Grid xs={12} md={6} lg={8}></Grid>
        </Grid>
      </MainContainerPage>
    </>
  )
})
