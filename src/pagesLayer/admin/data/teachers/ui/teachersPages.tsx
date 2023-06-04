import { Stack } from '@mui/material'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ContentHeader, InfoNoData, MainContainerPage, Meta, navModel } from '@/shared'
import { AddTeacher, ShowTableTeachers } from '@/widgets'

type PropsType = {
  isSchoolAdded: boolean
}

export const TeachersPages: FC<PropsType> = memo(({ isSchoolAdded }) => {
  const { t } = useTranslation('teachers')

  return (
    <>
      <Meta title={'Учителя'} />
      <MainContainerPage>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <ContentHeader title={t('L_title')} />
          {isSchoolAdded && <AddTeacher />}
        </Stack>
        {isSchoolAdded ? (
          <ShowTableTeachers />
        ) : (
          <InfoNoData action={'add_school'} link={navModel.ADMIN_ROUTE.data_school} />
        )}
      </MainContainerPage>
    </>
  )
})
