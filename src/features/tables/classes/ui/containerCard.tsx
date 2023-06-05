import { Unstable_Grid2 as Grid } from '@mui/material'
import { FC } from 'react'
import AliceCarousel from 'react-alice-carousel'

import { generateKey } from '@/shared'

import { responsive } from '../config'
import { ClassSchoolType } from '../types'

import { CardClass } from './cardClass'
import { NumberClassInfo } from './numberClassInfo'

type PropsType = {
  numberClass: string
  classes: ClassSchoolType[]
}

export const ContainerCard: FC<PropsType> = ({ numberClass, classes }) => {
  const classesDraw = classes.map(cl => {
    return <CardClass key={cl.class_id} classSchool={cl} />
  })

  return (
    <Grid
      container
      spacing={6}
      sx={{
        width: '100%',
        height: 200,
        marginTop: 1,
        marginBottom: 1,
      }}
    >
      <AliceCarousel
        items={[<NumberClassInfo key={generateKey()} numberClass={numberClass} />, ...classesDraw]}
        disableDotsControls
        disableButtonsControls
        animationType={'slide'}
        touchTracking
        mouseTracking
        responsive={responsive}
      />
    </Grid>
  )
}
