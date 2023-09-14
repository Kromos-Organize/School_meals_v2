import { NextPageWithLayout, DashLayout } from '@/App'
/* eslint-disable */
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { ChangeUserPage } from '@/pagesLayer'
import { UserEmployeeType } from '@/features'
import { useAxiosAuthServer } from '@/shared'

export const getServerSideProps = async (context: any) => {
  const { instanceServer, user } = await useAxiosAuthServer(context, authOptions)

  if (user?.id) {
    const response = await instanceServer.get(`/user/one/${user.id}`).then(res => res.data)
    if (!response) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        user: response,
      },
    }
  }
}

type PropsType = {
  user: UserEmployeeType
}
const AdminSettingsPage: NextPageWithLayout<PropsType> = ({ user }) => {
  return <ChangeUserPage user={user} isGoBack={false} />
}

AdminSettingsPage.getLayout = DashLayout

export default AdminSettingsPage
