import { memo } from 'react'

import { getCurrentUser, navigationData, useCurrentUser, useNavTranslate } from '@/entities'

import { TreeNav } from '@/shared/treeNav'

export const NavBar = memo(() => {
  const { role } = useCurrentUser(getCurrentUser)

  const translateNav = useNavTranslate(navigationData[role])

  return <TreeNav navigation={translateNav} />
})
