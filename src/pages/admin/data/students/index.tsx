import { GetServerSideProps } from 'next'

import { NextPageWithLayout, DashLayout } from '@/App'
import { StudentsPage } from '@/pagesLayer'
import { useAxiosAuthServer } from '@/shared'
/* eslint-disable */
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export const getServerSideProps: GetServerSideProps = async context => {
  const { instanceServer, user } = await useAxiosAuthServer(context, authOptions)

  if (!user?.school_id) return { props: { isSchool: false } }

  const response = await instanceServer
    .get(`/class/count/?school_id=${user.school_id}`)
    .then(res => res.data)

  return {
    props: {
      isClasses: !!response.count,
    },
  }
}

type PropsType = {
  isClasses?: boolean
  isSchool?: boolean
}

const Students: NextPageWithLayout<PropsType> = ({ isClasses, isSchool }) => {
  return <StudentsPage isClasses={!!isClasses || !!isSchool} />
}

Students.getLayout = DashLayout

export default Students
