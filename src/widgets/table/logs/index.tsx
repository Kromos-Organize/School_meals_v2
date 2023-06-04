import { useEffect } from 'react'

import { LogsTable } from '@/features'
import { useBoolean } from '@/hooks'
import { DialogWindow } from '@/shared'

import { useListLogsQuery, useLogMutate } from './model'

export const ShowTableLogs = () => {
  const { data: logs, isLoading: isListQuery } = useListLogsQuery()
  const { mutate: getLog, isLoading: isLogQuery, data } = useLogMutate()

  const isOpenDialog = useBoolean(false)

  useEffect(() => {
    if (data) {
      isOpenDialog.setTrue()
    }
  }, [data])

  const isLoading = isListQuery || isLogQuery

  return (
    <>
      <LogsTable logs={logs} isLoading={isLoading} getLog={getLog} />
      <DialogWindow isOpen={isOpenDialog.value} close={isOpenDialog.setFalse} text={data} />
    </>
  )
}
