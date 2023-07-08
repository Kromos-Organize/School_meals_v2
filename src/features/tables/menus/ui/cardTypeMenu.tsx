import { Card, CardContent, Paper, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material'
import { FC } from 'react'

import { MenuType } from '@/features'

type PropsType = {
  type_menu: MenuType
}

export const CardTypeMenu: FC<PropsType> = ({ type_menu }) => {
  return (
    <div>
      <Grid sx={{ width: 350, height: '100%' }}>
        <Paper elevation={12}>
          <Card>
            <CardContent>
              <Stack
                sx={{ padding: 1, marginBottom: 1 }}
                justifyContent={'center'}
                alignItems={'center'}
                direction="row"
                spacing={3}
              >
                <Typography variant="h5">{type_menu.type_menu}</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </div>
  )
}
