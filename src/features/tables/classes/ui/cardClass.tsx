import { UserCircleIcon } from '@heroicons/react/24/outline'
import {
  Box,
  Card,
  CardContent,
  Unstable_Grid2 as Grid,
  Paper,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { ClassSchoolType } from '../types'

type PropsType = {
  classSchool: ClassSchoolType
}

export const CardClass: FC<PropsType> = ({ classSchool }) => {
  const { t } = useTranslation('classes')

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
                <Typography variant="h5">
                  {classSchool.number}
                  {classSchool.type}
                </Typography>
              </Stack>
              <Stack sx={{ padding: 1 }} alignItems={'center'} direction="column" spacing={1}>
                <Typography color="text.secondary" variant="overline">
                  {t('L_responsible_teacher')}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <SvgIcon sx={{ marginRight: 1 }}>
                    <UserCircleIcon />
                  </SvgIcon>
                  <Typography variant="overline">
                    {classSchool.user.fname} {classSchool.user.name}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </div>
  )
}
