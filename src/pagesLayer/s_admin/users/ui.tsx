import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ContentHeader, MainContainerPage, Meta, UsersSearch } from '@/shared'
import { ShowTableUsers } from '@/widgets'

export const UsersPage = memo(() => {
  const { t } = useTranslation('users')
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <>
      <Meta title="Users" />
      <MainContainerPage>
        <ContentHeader title={t('L_title')} />
        <UsersSearch
          placeholder={'Поиск пользователей'}
          value={searchValue}
          searchCallback={setSearchValue}
        />
        <ShowTableUsers />
      </MainContainerPage>
    </>
  )
})
