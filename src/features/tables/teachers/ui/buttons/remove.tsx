import { XCircleIcon } from '@heroicons/react/24/outline'
import { Button, SvgIcon, Tooltip } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type PropsType = {
  teacher_id: number
  remove: () => void
}

export const RemoveTeacher: FC<PropsType> = ({ teacher_id, remove }) => {
  const { t } = useTranslation('teachers')

  return (
    <Tooltip key="L_remove_teacher" title={t('L_remove_teacher')}>
      <Button color={'error'} onClick={remove}>
        <SvgIcon>
          <XCircleIcon />
        </SvgIcon>
      </Button>
    </Tooltip>
  )
}
