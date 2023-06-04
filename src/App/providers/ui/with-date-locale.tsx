import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useRouter } from 'next/router'

import { AppPropsWithLayout } from '@/App'

import { ProviderPropsType } from '../types'

import 'dayjs/locale/ru'
import 'dayjs/locale/be'

export const withDateLocale = (component: ProviderPropsType) => (props: AppPropsWithLayout) => {
  const router = useRouter()

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'ru'}>
      {component(props)}
    </LocalizationProvider>
  )
}
