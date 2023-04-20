import { memo } from 'react'

import { navigationData } from '@/entities'

import { TreeNav } from '@/shared/treeNav'
//! добавить получение роли пользователя
export const NavBar = memo(() => {
  return <TreeNav navigation={navigationData['ADMIN']} />
})
