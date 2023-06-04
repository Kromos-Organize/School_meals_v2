import { NextPageWithLayout, DashLayout } from '@/App'
/* eslint-disable */
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { ChangeSAdminPage } from '@/pagesLayer'
import { useAxiosAuthServer } from '@/shared'
import {S_AdminType} from '@/features/form/s_adminChange/types';

export const getServerSideProps = async (context: any) => {
  const { instanceServer, user: admin } = await useAxiosAuthServer(context, authOptions)

  if (admin?.id) {
    const response = await instanceServer
        .get(`/api/admin/${admin.id}`)
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
  admin: S_AdminType
}
const SAdminSettingsPage: NextPageWithLayout<PropsType> = ({ admin }) => {
  return <ChangeSAdminPage admin={admin} />
}

SAdminSettingsPage.getLayout = DashLayout

export default SAdminSettingsPage
