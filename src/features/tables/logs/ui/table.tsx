import { Box, Card, CircularProgress, LinearProgress, Table } from '@mui/material'
import { FC } from 'react'

import { Scrollbar } from '@/shared'

import { ListLogsType } from '../types'

import { LogsTableBody } from './body'
import { LogsTableHead } from './head'

type PropsType = {
  logs: ListLogsType | undefined
  isLoading: boolean
  getLog: (date: string) => void
}

export const LogsTable: FC<PropsType> = ({ logs, isLoading, getLog }) => {
  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          {logs?.length ? (
            <>
              {isLoading && (
                <Box sx={{ width: '100%' }}>
                  <LinearProgress color="secondary" />
                </Box>
              )}
              <Table>
                <LogsTableHead />
                <LogsTableBody logs={logs} getLog={getLog} />
              </Table>
            </>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
              <CircularProgress />
            </Box>
          )}
        </Box>
      </Scrollbar>
    </Card>
  )
}
