import { DashLayout, NextPageWithLayout } from '@/App'
/* eslint-disable */
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { SchoolPage } from '@/pagesLayer'
import { useAxiosAuthServer } from '@/shared';
import { SchoolFieldsType } from '@/features'

export const getServerSideProps = async (context: any) => {
  const {instanceServer, user} = await useAxiosAuthServer(context, authOptions)

  const response = await instanceServer.get(`/api/school/${user?.school_id}`).then(res => res.data)

  if(response.status === 400) {
    return {
      props: {
        school:{},
      },
    }
  }

  return {
    props: {
      school: response
    },
  }
}

type PropsType = {
  school: SchoolFieldsType
}

const AdminSchoolPage: NextPageWithLayout<PropsType> = ({ school }) => {
  return <SchoolPage school={school} />
}

AdminSchoolPage.getLayout = DashLayout

export default AdminSchoolPage
