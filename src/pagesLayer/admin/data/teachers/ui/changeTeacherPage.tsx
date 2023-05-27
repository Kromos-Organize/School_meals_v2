import { Stack } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { FormChangeTeacher, TeacherType } from '@/features'
import { ComeBack, ContentHeader, MainContainerPage, Meta } from '@/shared'

type PropsType = {
  teacher: TeacherType
}

export const ChangeTeacherPage: FC<PropsType> = ({ teacher }) => {
  const { t } = useTranslation('teachers')

  return (
    <>
      <Meta title={'Update Teacher'} />
      <MainContainerPage>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <ContentHeader title={t('L_title_change')} />
          <ComeBack />
        </Stack>
        <Grid container spacing={3}>
          <Grid xs={12} md={6} lg={8}>
            <FormChangeTeacher teacher={teacher} />
          </Grid>
        </Grid>
      </MainContainerPage>
    </>
  )
}
