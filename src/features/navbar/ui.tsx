import { memo } from 'react'

import { navigationData, useNavTranslate } from '@/entities'

import { TreeNav } from '@/shared/treeNav'
//! добавить получение роли пользователя
export const NavBar = memo(() => {
  const translateNav = useNavTranslate(navigationData['ADMIN'])

  return <TreeNav navigation={translateNav} />
})
