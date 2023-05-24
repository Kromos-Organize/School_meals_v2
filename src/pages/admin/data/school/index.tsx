import { DashLayout, NextPageWithLayout } from '@/App'
/* eslint-disable */
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { SchoolPage } from '@/pagesLayer'
import { useAxiosAuthServer } from '@/shared';
import { SchoolFieldsType } from '@/features'

export const getServerSideProps = async (context: any) => {
  const {instanceServer, user} = await useAxiosAuthServer(context, authOptions)

  if(user?.school_id) {
    const response = await instanceServer
      .get(`/api/school/${user?.school_id}`)
      .then(res => res.data)

      return {
        props: {
          school: response,
        },
      }
  }

  return {
    props: {
      school: null
    },
  }
}

type PropsType = {
  school: SchoolFieldsType | null
}

const AdminSchoolPage: NextPageWithLayout<PropsType> = ({ school }) => {
  return <SchoolPage school={school} />
}

AdminSchoolPage.getLayout = DashLayout

export default AdminSchoolPage
