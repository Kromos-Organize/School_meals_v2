import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { AccordionDetails, NavItem } from '@/shared'

import { ItemType } from '../model'

type PropsType = {
  active: boolean
  childItem: ItemType
}

export const Details: FC<PropsType> = ({ active, childItem }) => {
  const { t } = useTranslation('navData')

  return (
    <AccordionDetails>
      <NavItem
        active={active}
        icon={childItem.icon}
        key={childItem.title}
        path={childItem.path}
        title={t(`${childItem.title}`)}
      />
    </AccordionDetails>
  )
}
