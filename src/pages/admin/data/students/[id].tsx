/* eslint-disable */
import { DashLayout, NextPageWithLayout } from '@/App'
import { StudentType } from '@/features'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { ChangeStudentPage } from '@/pagesLayer'
import { useAxiosAuthServer } from '@/shared'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { instanceServer } = await useAxiosAuthServer(context, authOptions)

  const id = context.query.id;

  const response = await instanceServer.get(`/api/student/${id}`).then(res => res.data)
  
  if(!response) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      student: response,
    },
  }
}

type PropsType = {
  student: StudentType
}

const ChangeTeacher: NextPageWithLayout<PropsType> = ({ student }) => {

  return <ChangeStudentPage student={student} />
}

ChangeTeacher.getLayout = DashLayout

export default ChangeTeacher