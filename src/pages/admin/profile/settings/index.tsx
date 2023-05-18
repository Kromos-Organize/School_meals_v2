import { DashLayout, NextPageWithLayout } from '@/App'
import { Meta } from '@/shared'

const AdminSettingsPage: NextPageWithLayout = () => {
  return (
    <>
      <Meta title="Admin Setting" description="Hello World" />
      <div>AdminSettingsPage</div>
    </>
  )
}

AdminSettingsPage.getLayout = DashLayout

export default AdminSettingsPage
