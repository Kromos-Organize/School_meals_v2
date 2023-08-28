import { DashLayout, NextPageWithLayout } from '@/App'
/* eslint-disable */
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { CalculationPage } from '@/pagesLayer'
import { useAxiosAuthServer } from '@/shared';

export const getServerSideProps = async (context: any) => {
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

const Calculation: NextPageWithLayout<PropsType> = ({isTeachers, isSchool}) => {
  return <CalculationPage isTeachers={!!isTeachers || !!isSchool} />
}

Calculation.getLayout = DashLayout

export default Calculation
