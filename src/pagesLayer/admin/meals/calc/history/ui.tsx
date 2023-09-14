import { Stack, Unstable_Grid2 as Grid } from '@mui/material'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ContentHeader, MainContainerPage, Meta } from '@/shared'

export const HistoryCalcPage = memo(() => {
  const { t } = useTranslation('history')

  return (
    <>
      <Meta title={'История подсчетов'} />
      <MainContainerPage>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <ContentHeader title={t('L_title')} />
        </Stack>

        <Grid container spacing={3} sx={{ width: '100%' }}>
          <Grid sx={{ width: '100%' }}></Grid>
        </Grid>
      </MainContainerPage>
    </>
  )
})
