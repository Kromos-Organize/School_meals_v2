import { TableBody } from '@mui/material'
import { FC } from 'react'

import { ListLogsType } from '../types'

import { LogsTableRow } from './row'

type PropsType = {
  logs: ListLogsType
  getLog: (date: string) => void
}

export const LogsTableBody: FC<PropsType> = ({ logs, getLog }) => {
  const rows = logs.map(date => <LogsTableRow key={date} date={date} getLog={getLog} />)

  return <TableBody>{rows}</TableBody>
}
