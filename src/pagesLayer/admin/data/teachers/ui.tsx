import { Stack } from '@mui/material'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ButtonAdd, ContentHeader, InfoNoSchool, MainContainerPage, Meta } from '@/shared'
import { ShowTableTeachers } from '@/widgets'

type PropsType = {
  isSchoolAdded: boolean
}

export const TeachersPages: FC<PropsType> = memo(({ isSchoolAdded }) => {
  const { t } = useTranslation('teachers')

  return (
    <>
      <Meta title={'Teachers'} />
      <MainContainerPage>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <ContentHeader title={t('L_title')} />
          {isSchoolAdded && <ButtonAdd title={t('L_add_teacher')} callback={() => {}} />}
        </Stack>
        {isSchoolAdded ? <ShowTableTeachers /> : <InfoNoSchool />}
      </MainContainerPage>
    </>
  )
})
