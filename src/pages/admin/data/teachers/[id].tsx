import { DashLayout, NextPageWithLayout } from '@/App'
import { TeacherType } from '@/features'
/* eslint-disable */
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { ChangeTeacherPage } from '@/pagesLayer'
import { useAxiosAuthServer } from '@/shared'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { instanceServer} = await useAxiosAuthServer(context, authOptions)

  const id = context.query.id;

  const response = await instanceServer.get(`/api/user/${id}`).then(res => res.data)
  
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
