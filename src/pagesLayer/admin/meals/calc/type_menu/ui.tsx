import { Unstable_Grid2 as Grid, Stack } from '@mui/material'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { TypeMenusTable } from '@/features'
import { useCurrentUser } from '@/hooks'
import { ContentHeader, InfoNoData, MainContainerPage, Meta, navModel } from '@/shared'
import { AddTypeMenu } from '@/widgets'

export const TypeMenuPage = memo(() => {
  const { t } = useTranslation('type_menus')

  const user = useCurrentUser()

  return (
    <>
      <Meta title={'Типы меню'} />
      <MainContainerPage>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <ContentHeader title={t('L_title')} />
          {user?.school_id && <AddTypeMenu />}
        </Stack>

        <Grid container spacing={3} sx={{ width: '100%' }}>
          <Grid sx={{ width: '100%' }}>
            {user?.school_id ? (
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
