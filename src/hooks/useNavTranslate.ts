import { useTranslation } from 'react-i18next'

import { NavigationOfficeType } from '@/shared'

export function useNavTranslate(data: NavigationOfficeType[]): NavigationOfficeType[] {
  const { t } = useTranslation('navData')

  return data.map(item => ({
    ...item,
    title: t(`L_${item.title}`),
    routes: item.routes
      ? item.routes.map(nested => ({ ...nested, title: t(`L_${nested.title}`) }))
      : undefined,
  }))
}
