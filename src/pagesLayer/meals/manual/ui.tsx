import { Alert, Unstable_Grid2 as Grid, Stack } from '@mui/material'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { useListClassesQuery, useListStudentsQuery } from '@/features'
import { ContentHeader, MainContainerPage, Meta } from '@/shared'

export const ManualCalcPage: FC = memo(() => {
  const { t } = useTranslation('manual_calc')

  const { data: classesSchool, isLoading: loadClass } = useListClassesQuery()
  const { data: students, isLoading: loadStudents } = useListStudentsQuery()

  console.log(classesSchool)
  console.log(students)

  return (
    <>
      <Meta title={'Ручной подсчет'} />
      <MainContainerPage>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <ContentHeader title={t('L_title')} />
        </Stack>
        <Alert severity="info" color="info">
          {t('L_info_page')}
        </Alert>

        <Grid container spacing={3} sx={{ width: '100%' }}>
          <Grid sx={{ width: '100%' }}>
            {/* {isTeachers ? (
              <>
                <ClassesTable />
              </>
            ) : (
              <InfoNoData action={'add_teacher'} link={navModel.ADMIN_ROUTE.data_teachers} />
            )} */}
          </Grid>
        </Grid>
      </MainContainerPage>
    </>
  )
})
