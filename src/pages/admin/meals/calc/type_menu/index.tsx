import { DashLayout, NextPageWithLayout } from '@/App'
/* eslint-disable */
import { TypeMenuPage } from '@/pagesLayer'

type PropsType = {
  school_id: number
}

const TypeMenus: NextPageWithLayout<PropsType> = ({ school_id }) => {
  return <TypeMenuPage />
}

TypeMenus.getLayout = DashLayout

export default TypeMenus
