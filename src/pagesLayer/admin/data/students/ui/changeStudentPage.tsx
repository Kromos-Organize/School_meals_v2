import { Stack } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { FormChangeStudent, StudentType } from '@/features'
import { ComeBack, ContentHeader, MainContainerPage, Meta } from '@/shared'

type PropsType = {
  student: StudentType
}

export const ChangeStudentPage: FC<PropsType> = ({ student }) => {
  const { t } = useTranslation('students')

  return (
    <>
      <Meta title={'Обновить ученика'} />
      <MainContainerPage>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <ContentHeader title={t('L_title_change')} />
          <ComeBack />
        </Stack>
        <Grid container spacing={3}>
          <Grid xs={12} md={6} lg={8}>
            <FormChangeStudent student={student} />
          </Grid>
        </Grid>
      </MainContainerPage>
    </>
  )
}
