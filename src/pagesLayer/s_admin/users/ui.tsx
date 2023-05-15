import { Box, Container, Stack } from '@mui/material'
import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ContentHeader, Meta, UsersSearch } from '@/shared'
import { ShowTableUsers } from '@/widgets'

export const UsersPage = memo(() => {
  const { t } = useTranslation('users')
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <>
      <Meta title="Users" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <ContentHeader title={t('L_title')} />
            <UsersSearch
              placeholder={'Поиск пользователей'}
              value={searchValue}
              searchCallback={setSearchValue}
            />
            <ShowTableUsers />
          </Stack>
        </Container>
      </Box>
    </>
  )
})
