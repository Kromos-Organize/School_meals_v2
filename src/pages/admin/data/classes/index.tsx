import { GetServerSideProps } from 'next'

import { DashLayout, NextPageWithLayout } from '@/App'
/* eslint-disable */
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { ClassesPage } from '@/pagesLayer'
import { useAxiosAuthServer } from '@/shared'
import 'react-alice-carousel/lib/alice-carousel.css'

export const getServerSideProps: GetServerSideProps = async context => {
  const { instanceServer, user } = await useAxiosAuthServer(context, authOptions)

  if (!user?.school_id) return { props: { isSchool: false } }

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
  isTeachers?: boolean
  isSchool?: boolean
}

const Classes: NextPageWithLayout<PropsType> = ({ isTeachers, isSchool }) => {
  return <ClassesPage isTeachers={!!isTeachers || !!isSchool} />
}

Classes.getLayout = DashLayout

export default Classes
