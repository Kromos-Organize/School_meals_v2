import { Unstable_Grid2 as Grid, Stack } from '@mui/material'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { TypeMenusTable } from '@/features'
import { ContentHeader, InfoNoData, MainContainerPage, Meta, navModel } from '@/shared'
import { AddTypeMenu } from '@/widgets'

type PropsType = {
  school_id: number
}

export const TypeMenuPage: FC<PropsType> = memo(({ school_id }) => {
  const { t } = useTranslation('menus')

  return (
    <>
      <Meta title={'Типы меню'} />
      <MainContainerPage>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <ContentHeader title={t('L_title')} />
          {school_id && <AddTypeMenu />}
        </Stack>

        <Grid container spacing={3} sx={{ width: '100%' }}>
          <Grid sx={{ width: '100%' }}>
            {school_id ? (
              <>
                <TypeMenusTable />
              </>
            ) : (
              <InfoNoData action={'add_school'} link={navModel.ADMIN_ROUTE.data_school} />
            )}
          </Grid>
        </Grid>
      </MainContainerPage>
    </>
  )
})
