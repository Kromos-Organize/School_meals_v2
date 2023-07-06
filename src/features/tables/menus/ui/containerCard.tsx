import { Unstable_Grid2 as Grid } from '@mui/material'
import { FC } from 'react'

import { MenuType } from '@/features'

import { CardTypeMenu } from '@/features/tables/menus/ui/cardTypeMenu'

type PropsType = {
  menus: MenuType[] | undefined
}

export const ContainerCard: FC<PropsType> = ({ menus }) => {
  const typeMenusDraw = menus?.map(type_menu => {
    return <CardTypeMenu key={type_menu.type_id} type_menu={type_menu} />
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
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>{typeMenusDraw}</div>
    </Grid>
  )
}
