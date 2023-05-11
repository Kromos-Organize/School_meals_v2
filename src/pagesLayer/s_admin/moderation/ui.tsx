import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { HeaderContent, Meta } from '@/shared'
import { ModerationTable } from '@/widgets'

export const ModerationPage = memo(() => {
  const { t } = useTranslation('moderation')

  return (
    <>
      <Meta title="Moderation" />
      <HeaderContent title={t('L_title')} />
      <ModerationTable />
    </>
  )
})
