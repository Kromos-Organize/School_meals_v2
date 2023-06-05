import { Card, CardContent, Paper, Typography, Unstable_Grid2 as Grid } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type PropsType = {
  numberClass: string
}

export const NumberClassInfo: FC<PropsType> = ({ numberClass }) => {
  const { t } = useTranslation('classes')

  return (
    <div>
      <Grid sx={{ width: 250, height: '100%' }}>
        <Paper elevation={12}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                {numberClass}
                {t('L_number_class_info')}
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </div>
  )
}
