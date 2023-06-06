import { GetServerSideProps } from 'next'

import { NextPageWithLayout, DashLayout } from '@/App'
import { StudentsPage } from '@/pagesLayer'
import { useAxiosAuthServer } from '@/shared'
/* eslint-disable */
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export const getServerSideProps: GetServerSideProps = async context => {
  const { instanceServer, user } = await useAxiosAuthServer(context, authOptions)

  const response = await instanceServer
    .get(`/api/classes/count/${user?.school_id}`)
    .then(res => res.data)

  return {
    props: {
      isClasses: !!response.count,
    },
  }
}

type PropsType = {
  isClasses: boolean
}

const Students: NextPageWithLayout<PropsType> = ({ isClasses }) => {
  
  return <StudentsPage isClasses={isClasses} />
}

Students.getLayout = DashLayout

export default Students
