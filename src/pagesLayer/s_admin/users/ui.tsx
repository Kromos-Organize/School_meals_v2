import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { UsersTable } from '@/features'
import { ContentHeader, MainContainerPage, Meta, UsersSearch } from '@/shared'

export const UsersPage = memo(() => {
  const { t } = useTranslation('users')
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <>
      <Meta title="Пользователи" />
      <MainContainerPage>
        <ContentHeader title={t('L_title')} />
        <UsersSearch
          placeholder={'Поиск пользователей'}
          value={searchValue}
          searchCallback={setSearchValue}
        />
        <UsersTable />
      </MainContainerPage>
    </>
  )
})
