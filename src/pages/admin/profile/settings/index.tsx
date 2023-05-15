import { DashLayout, NextPageWithLayout } from '@/App'
import { getCurrentUser, useCurrentUser } from '@/entities'
import { Meta, instance } from '@/shared'

const AdminSettingsPage: NextPageWithLayout = () => {
  const current = useCurrentUser(getCurrentUser)

  const user = instance.get('/user/one/' + current.id).then(res => res)

  return (
    <>
      <Meta title="Admin Setting" description="Hello World" />
      <div>AdminSettingsPage</div>
    </>
  )
}

AdminSettingsPage.getLayout = DashLayout

export default AdminSettingsPage
