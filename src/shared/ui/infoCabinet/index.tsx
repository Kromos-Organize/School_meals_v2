import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type PropsType = {
  role: 'ADMIN' | 'S_ADMIN' | undefined
}

export const InfoCabinet: FC<PropsType> = ({ role }) => {
  const { t } = useTranslation('navData')

  const roleCurrent = role ?? 'ADMIN'

  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        borderRadius: 1,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        mt: 2,
        p: '12px',
      }}
    >
      <div>
        <Typography color="inherit" variant="subtitle1">
          School Meals
        </Typography>
        <Typography color="neutral.400" variant="body2">
          {t(`L_${roleCurrent}`)}
        </Typography>
      </div>
    </Box>
  )
}
