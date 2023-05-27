import { useRouter } from 'next/router'
import { getServerSession } from 'next-auth'

import { DashLayout, NextPageWithLayout } from '@/App'
import { TeacherType } from '@/features'
/* eslint-disable */
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { useAxiosAuthServer } from '@/shared'
import { GetServerSideProps } from 'next'
import { ChangeTeacherPage } from '@/pagesLayer'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { instanceServer, user } = await useAxiosAuthServer(context, authOptions)

  const id = context.query.id;

  const response = await instanceServer.get(`/api/teacher/${id}`).then(res => res.data)
  
  if(!response) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      teacher: response,
    },
  }
}

type PropsType = {
  teacher: TeacherType
}

const ChangeTeacher: NextPageWithLayout<PropsType> = ({ teacher }) => {

  return <ChangeTeacherPage teacher={teacher} />
}

ChangeTeacher.getLayout = DashLayout

export default ChangeTeacher
