import { Stack } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { FormChangeUser, TeacherType } from '@/features'
import { ComeBack, ContentHeader, MainContainerPage, Meta } from '@/shared'

type PropsType = {
  teacher: TeacherType
}

export const ChangeUserPage: FC<PropsType> = ({ teacher }) => {
  const { t } = useTranslation('teachers')

  return (
    <>
      <Meta title={'Обновить учителя'} />
      <MainContainerPage>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <ContentHeader title={t('L_title_change')} />
          {teacher.role === 'EMPLOYEE' && <ComeBack />}
        </Stack>
        <Grid container spacing={3}>
          <Grid xs={12} md={6} lg={8}>
            <FormChangeUser teacher={teacher} />
          </Grid>
        </Grid>
      </MainContainerPage>
    </>
  )
}
