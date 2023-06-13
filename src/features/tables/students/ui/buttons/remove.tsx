import { XCircleIcon } from '@heroicons/react/24/outline'
import { Button, SvgIcon, Tooltip } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type PropsType = {
  remove: () => void
}

export const RemoveStudent: FC<PropsType> = ({ remove }) => {
  const { t } = useTranslation('students')

  return (
    <Tooltip key="L_remove_student" title={t('L_remove_student')}>
      <Button color={'error'} onClick={remove}>
        <SvgIcon>
          <XCircleIcon />
        </SvgIcon>
      </Button>
    </Tooltip>
  )
}
