import { Box } from '@mui/material'

import { useListTypeMenusQuery } from '../model'

import { ContainerCard } from './containerCard'

export const TypeMenusTable = () => {
  const { data: menus } = useListTypeMenusQuery()

  return (
    <Box sx={{ marginLeft: 0, marginRight: 0, width: '100%' }}>
      <ContainerCard menus={menus} />
    </Box>
  )
}
