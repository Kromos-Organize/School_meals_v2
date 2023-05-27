import { PencilSquareIcon } from '@heroicons/react/24/outline'
import * as material from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { navModel } from '@/shared'

type PropsType = {
  teacher_id: number
}

export const ChangeTeacher: FC<PropsType> = ({ teacher_id }) => {
  const { t } = useTranslation('teachers')

  return (
    <material.Tooltip key="L_change_teacher" title={t('L_change_teacher')}>
      <Link
        href={navModel.MAIN_ROUTE.admin + navModel.ADMIN_ROUTE.data_teachers + `/${teacher_id}`}
      >
        <material.SvgIcon>
          <PencilSquareIcon />
        </material.SvgIcon>
      </Link>
    </material.Tooltip>
  )
}
