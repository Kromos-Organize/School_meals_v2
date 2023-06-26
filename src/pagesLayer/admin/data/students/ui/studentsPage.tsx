import { Unstable_Grid2 as Grid, Stack } from '@mui/material'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { StudentsTable } from '@/features'
import { ContentHeader, InfoNoData, MainContainerPage, Meta, navModel } from '@/shared'
import { AddStudent } from '@/widgets'

type PropsType = {
  isClasses: boolean
}

export const StudentsPage: FC<PropsType> = memo(({ isClasses }) => {
  const { t } = useTranslation('students')

  return (
    <>
      <Meta title={'Учащиеся'} />
      <MainContainerPage>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <ContentHeader title={t('L_title')} />
          {isClasses && <AddStudent />}
        </Stack>
        {isClasses ? (
          <StudentsTable />
        ) : (
          <InfoNoData action={'add_classes'} link={navModel.ADMIN_ROUTE.data_classes} />
        )}
      </MainContainerPage>
    </>
  )
})
