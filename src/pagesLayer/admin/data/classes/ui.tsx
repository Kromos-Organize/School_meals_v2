import { Unstable_Grid2 as Grid, Stack } from '@mui/material'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ClassesTable } from '@/features'
import { ContentHeader, InfoNoData, MainContainerPage, Meta, navModel } from '@/shared'
import { AddClass } from '@/widgets'

type PropsType = {
  isTeachers: boolean
}

export const ClassesPage: FC<PropsType> = memo(({ isTeachers }) => {
  const { t } = useTranslation('classes')

  return (
    <>
      <Meta title={'Классы'} />
      <MainContainerPage>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <ContentHeader title={t('L_title')} />
          {isTeachers && <AddClass />}
        </Stack>

        <Grid container spacing={3} sx={{ width: '100%' }}>
          <Grid sx={{ width: '100%' }}>
            {isTeachers ? (
              <>
                <ClassesTable />
              </>
            ) : (
              <InfoNoData action={'add_teacher'} link={navModel.ADMIN_ROUTE.data_teachers} />
            )}
          </Grid>
        </Grid>
      </MainContainerPage>
    </>
  )
})
