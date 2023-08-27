import { Button, Stack, Unstable_Grid2 as Grid } from '@mui/material'
import { FC, memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { namesEventClient, StatusSocket, useSocket } from '@/entities'
import { ClassesTable } from '@/features'
import { ContentHeader, InfoNoData, MainContainerPage, Meta, navModel } from '@/shared'

type PropsType = {
  isTeachers: boolean
}
export const CalculationPage: FC<PropsType> = memo(({ isTeachers }) => {
  const { t } = useTranslation('calculation')

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

        <Grid container spacing={3} sx={{ width: '100%' }}>
          <Grid sx={{ width: '100%' }}>
            <Button onClick={test}>Таблица классов</Button>
            {isTeachers ? (
              <>
                <ClassesTable />
              </>
            ) : (
              <InfoNoData action={'add_teacher'} link={navModel.ADMIN_ROUTE.data_teachers} />
            )}
          </Grid>
        </Grid>
      </MainContainerPage>
    </>
  )
})
