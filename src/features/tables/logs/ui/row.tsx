import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { Button, SvgIcon, TableCell, TableRow, Tooltip, Typography } from '@mui/material'
import { FC, MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'

import { FileNameTypes, GetDataLogType } from '@/features'

type PropsType = {
  date: string
  getLog: (data: GetDataLogType) => void
}

export const LogsTableRow: FC<PropsType> = ({ date, getLog }) => {
  const { t } = useTranslation('logs')

  const get_file = (e: MouseEvent<HTMLButtonElement>) =>
    getLog({ date, file_name: e.currentTarget.name as FileNameTypes })

  return (
    <TableRow hover>
      <TableCell align="center">
        <Typography variant="subtitle2">{date}</Typography>
      </TableCell>
      <TableCell align="center">
        <Tooltip key="two" title={t('L_get_file_query')}>
          <Button name={'query'} color={'inherit'} onClick={get_file}>
            <SvgIcon>
              <ArrowTopRightOnSquareIcon />
            </SvgIcon>
          </Button>
        </Tooltip>
        <Tooltip key="two" title={t('L_get_file_socket')}>
          <Button name={'socket'} color={'inherit'} onClick={get_file}>
            <SvgIcon>
              <ArrowTopRightOnSquareIcon />
            </SvgIcon>
          </Button>
        </Tooltip>
      </TableCell>
    </TableRow>
  )
}
