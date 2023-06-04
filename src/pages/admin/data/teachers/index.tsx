import { getServerSession } from 'next-auth'

import { NextPageWithLayout, DashLayout } from '@/App'
/* eslint-disable */
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { TeachersPages } from '@/pagesLayer'

export const getServerSideProps = async (context: any) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  const user = session?.user

  return {
    props: {
      isSchoolAdded: !!user?.school_id,
    },
  }
}

type PropsType = {
  isSchoolAdded: boolean
}

const Teachers: NextPageWithLayout<PropsType> = ({ isSchoolAdded }) => {
  return <TeachersPages isSchoolAdded={isSchoolAdded}/>
}

Teachers.getLayout = DashLayout

export default Teachers
