import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material'
import NextLink from 'next/link'
import { FC, PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'

import { Logo } from '@/shared'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation('providers')

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        height: '100vh',
      }}
    >
      <Grid container sx={{ flex: '1 1 auto' }}>
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%',
            }}
          >
            <Box
              component={NextLink}
              href="/"
              sx={{
                display: 'inline-flex',
                height: 32,
                width: 32,
              }}
            >
              <div style={{ left: 0, padding: '24px', position: 'fixed', top: 0, width: '100%' }}>
                <Logo w={64} h={64} />
              </div>
            </Box>
          </Box>
          {children}
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: 'center',
            background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            '& img': {
              maxWidth: '100%',
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              align="center"
              color="inherit"
              sx={{
                fontSize: '24px',
                lineHeight: '32px',
                mb: 1,
              }}
              variant="h1"
            >
              {t('L_hello')}{' '}
              <Box component="a" sx={{ color: '#15B79E' }} target="_blank">
                School meals
              </Box>
            </Typography>
            <Typography align="center" sx={{ mb: 3, maxWidth: '450px' }} variant="subtitle1">
              {t('L_description')}
            </Typography>
            <img alt="" src="/assets/Mathematics-amico.svg" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
