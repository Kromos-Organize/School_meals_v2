import { Unstable_Grid2 as Grid } from '@mui/material'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { FormSchool, SchoolFieldsType } from '@/features'
import { ContentHeader, MainContainerPage, Meta } from '@/shared'

type PropsType = {
  school: SchoolFieldsType
}

export const SchoolPage: FC<PropsType> = memo(({ school }) => {
  const { t } = useTranslation('school')

  return (
    <>
      <Meta title={'School'} />
      <MainContainerPage>
        <ContentHeader title={t('L_title')} />
        <Grid container spacing={3}>
          <Grid xs={12} md={6} lg={8}>
            <FormSchool school={school} />
          </Grid>
        </Grid>
      </MainContainerPage>
    </>
  )
})
