import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { Button, SvgIcon, TableCell, TableRow, Tooltip, Typography } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type PropsType = {
  date: string
  getLog: (date: string) => void
}

export const LogsTableRow: FC<PropsType> = ({ date, getLog }) => {
  const { t } = useTranslation('logs')

  const get = () => getLog(date)

  return (
    <TableRow hover>
      <TableCell align="center">
        <Typography variant="subtitle2">{date}</Typography>
      </TableCell>
      <TableCell align="center">
        {
          <Tooltip key="two" title={t('L_get_file')}>
            <Button color={'inherit'} onClick={get}>
              <SvgIcon>
                <ArrowTopRightOnSquareIcon />
              </SvgIcon>
            </Button>
          </Tooltip>
        }
      </TableCell>
    </TableRow>
  )
}
