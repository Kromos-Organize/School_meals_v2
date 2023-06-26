import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { Button, SvgIcon, Tooltip } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { navModel } from '@/shared'

type PropsType = {
  student_id: number
}

export const ChangeStudent: FC<PropsType> = ({ student_id }) => {
  const { t } = useTranslation('students')

  return (
    <Tooltip key="L_change_student" title={t('L_change_student')}>
      <Link
        href={navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.data_students + `/${student_id}`}
      >
        <Button>
          <SvgIcon>
            <PencilSquareIcon />
          </SvgIcon>
        </Button>
      </Link>
    </Tooltip>
  )
}
