import { TableBody } from '@mui/material'
import { FC } from 'react'

import { GetDataLogType, ListLogsType } from '../types'

import { LogsTableRow } from './row'

type PropsType = {
  logs: ListLogsType
  getLog: (data: GetDataLogType) => void
}

export const LogsTableBody: FC<PropsType> = ({ logs, getLog }) => {
  const rows = logs.map(date => <LogsTableRow key={date} date={date} getLog={getLog} />)

  return <TableBody>{rows}</TableBody>
}
