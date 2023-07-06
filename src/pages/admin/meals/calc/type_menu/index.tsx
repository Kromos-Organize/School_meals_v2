import { GetServerSideProps } from 'next'

import { DashLayout, NextPageWithLayout } from '@/App'
/* eslint-disable */
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { TypeMenuPage } from '@/pagesLayer'
import { useAxiosAuthServer } from '@/shared'
import 'react-alice-carousel/lib/alice-carousel.css'

export const getServerSideProps: GetServerSideProps = async context => {
  const { instanceServer, user } = await useAxiosAuthServer(context, authOptions)

  const response = await instanceServer.get(`/api/user/${user?.school_id}`).then(res => res.data)

  return {
    props: {
      school_id: !!response.school_id,
    },
  }
}

type PropsType = {
  school_id: number
}

const TypeMenus: NextPageWithLayout<PropsType> = ({ school_id }) => {
  return <TypeMenuPage school_id={school_id} />
}

TypeMenus.getLayout = DashLayout

export default TypeMenus
