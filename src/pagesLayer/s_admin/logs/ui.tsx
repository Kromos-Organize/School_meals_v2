import { Box, Container, Stack } from '@mui/material'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ContentHeader, Meta } from '@/shared'
import { ShowTableLogs } from '@/widgets'

export const LogsPage = memo(() => {
  const { t } = useTranslation('logs')

  return (
    <>
      <Meta title="Logs" />
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
            <ShowTableLogs />
          </Stack>
        </Container>
      </Box>
    </>
  )
})
