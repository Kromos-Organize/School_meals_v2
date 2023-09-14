import { Stack } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { FormChangeUser, UserEmployeeType } from '@/features'
import { ComeBack, ContentHeader, MainContainerPage, Meta } from '@/shared'

type PropsType = {
  user: UserEmployeeType
  isGoBack: boolean
}

export const ChangeUserPage: FC<PropsType> = ({ user, isGoBack }) => {
  const { t } = useTranslation('teachers')

  return (
    <>
      <Meta title={'Обновить данные пользователя'} />
      <MainContainerPage>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <ContentHeader title={t('L_title_change')} />
          {isGoBack && <ComeBack />}
        </Stack>
        <Grid container spacing={3}>
          <Grid xs={12} md={6} lg={8}>
            <FormChangeUser user={user} isGoBack={isGoBack} />
          </Grid>
        </Grid>
      </MainContainerPage>
    </>
  )
}
