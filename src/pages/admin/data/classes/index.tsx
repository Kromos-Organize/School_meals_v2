import { GetServerSideProps } from 'next'

import { DashLayout, NextPageWithLayout } from '@/App'
/* eslint-disable */
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { ClassesPage } from '@/pagesLayer'
import { useAxiosAuthServer } from '@/shared'
import 'react-alice-carousel/lib/alice-carousel.css'

export const getServerSideProps: GetServerSideProps = async context => {
  const { instanceServer, user } = await useAxiosAuthServer(context, authOptions)

  const response = await instanceServer
    .get(`/api/user/count_teacher/${user?.school_id}`)
    .then(res => res.data)

  return {
    props: {
      isTeachers: !!response.count,
    },
  }
}

type PropsType = {
  isTeachers: boolean
}

const Classes: NextPageWithLayout<PropsType> = ({ isTeachers }) => {
  return <ClassesPage isTeachers={isTeachers} />
}

Classes.getLayout = DashLayout

export default Classes
