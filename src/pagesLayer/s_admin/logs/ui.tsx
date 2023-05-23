import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ContentHeader, Meta, MainContainerPage } from '@/shared'
import { ShowTableLogs } from '@/widgets'

export const LogsPage = memo(() => {
  const { t } = useTranslation('logs')

  return (
    <>
      <Meta title="Logs" />
      <MainContainerPage>
        <ContentHeader title={t('L_title')} />
        <ShowTableLogs />
      </MainContainerPage>
    </>
  )
})
