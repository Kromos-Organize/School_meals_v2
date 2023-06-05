import { Box } from '@mui/material'

import { generateKey } from '@/shared'

import { transformClasses } from '../lib'
import { useListClassesQuery } from '../model'

import { ContainerCard } from './containerCard'

export const ClassesTable = () => {
  const { data } = useListClassesQuery()

  const classes = transformClasses(data ? data : [])

  const keyClasses = Object.keys(classes)

  const containersClasses = keyClasses.map(key => {
    const cl = classes ? classes[key] : []

    return <ContainerCard key={generateKey()} classes={cl} numberClass={key} />
  })

  return <Box sx={{ marginLeft: 0, marginRight: 0, width: '100%' }}>{containersClasses}</Box>
}
