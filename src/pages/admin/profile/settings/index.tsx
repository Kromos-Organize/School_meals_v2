import { getServerSession } from 'next-auth'

import { NextPageWithLayout, DashLayout } from '@/App'
/* eslint-disable */
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { ChangeUserPage } from '@/pagesLayer'
import { TeacherType } from '@/features';
import { useAxiosAuthServer } from '@/shared';

export const getServerSideProps = async (context: any) => {
  const {instanceServer, user} = await useAxiosAuthServer(context, authOptions)

  if (user?.id) {
    const response = await instanceServer
        .get(`/api/user/${user.id}`)
        .then(res => res.data)

    if (!response) {
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
}

type PropsType = {
  teacher: TeacherType
}
const AdminSettingsPage:NextPageWithLayout<PropsType> = ({ teacher }) => {
  return <ChangeUserPage teacher={teacher} />
}

AdminSettingsPage.getLayout = DashLayout

export default AdminSettingsPage
