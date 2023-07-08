import { Alert, Button, Unstable_Grid2 as Grid, Stack } from '@mui/material'
import { FC, memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { StatusSocket, namesEventClient, useSocket } from '@/entities'
import { ContentHeader, MainContainerPage, Meta } from '@/shared'

export const CalculationPage: FC = memo(() => {
  const { t } = useTranslation('calculation')

  // const { data: classesSchool, isLoading: loadClass } = useListClassesQuery()
  // const { data: students, isLoading: loadStudents } = useListStudentsQuery()

  const { emit, socket, status } = useSocket()

  useEffect(() => {
    if (socket && status === StatusSocket.CONNECTED) {
      socket?.on(namesEventClient.msgToClient, (data: any) => {
        alert(data)
      })
    }
  }, [status, socket])

  const test = () => {
    emit?.sendTestMessage('hello world')
  }

  return (
    <>
      <Meta title={'Подсчёт питания'} />
      <MainContainerPage>
        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <ContentHeader title={t('L_title')} />
        </Stack>
        <Alert severity="info" color="info">
          {t('L_info_page')}
        </Alert>

        <Grid container spacing={3} sx={{ width: '100%' }}>
          <Grid sx={{ width: '100%' }}>
            <Button onClick={test}>Test</Button>
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
