import { NextPageWithLayout, DashLayout } from '@/App'
/* eslint-disable */
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { ChangeSAdminPage } from '@/pagesLayer'
import { AdminType } from '@/features'
import { useAxiosAuthServer } from '@/shared'

export const getServerSideProps = async (context: any) => {
  const { instanceServer, user } = await useAxiosAuthServer(context, authOptions)

  if (user?.id) {
    const response = await instanceServer
        .get(`/api/admin/${user.id}`)
        .then(res => res.data)

    if (!response) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        admin: response,
      },
    }
  }
}

type PropsType = {
  admin: AdminType
}
const SAdminSettingsPage: NextPageWithLayout<PropsType> = ({ admin }) => {
  return <ChangeSAdminPage admin={admin} />
}

SAdminSettingsPage.getLayout = DashLayout

export default SAdminSettingsPage
