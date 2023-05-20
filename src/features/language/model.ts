import { create } from 'zustand'

import { LS } from '@/shared'

export type LangVariableType = 'ru' | 'by'

type LocaleTye = {
  locale: LangVariableType | null
  setLocale: (locale: LangVariableType) => void
  getLocale: () => void
}

export const useLocale = create<LocaleTye>(set => ({
  locale: null,
  setLocale: (locale: LangVariableType) =>
    set(() => {
      LS.set('language', locale)

      return { locale }
    }),
  getLocale: () =>
    set(() => {
      const locale = LS.get('language') as LangVariableType

      return { locale: locale ?? 'ru' }
    }),
}))
