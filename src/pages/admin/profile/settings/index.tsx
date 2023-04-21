import { NextPageWithLayout, getLayout } from '@/App'
import { Meta } from '@/shared'

const AdminSettingsPage: NextPageWithLayout = () => {
  return (
    <>
      <Meta title="Admin Setting" description="Hello World" />
      <div>AdminSettingsPage</div>
    </>
  )
}

AdminSettingsPage.getLayout = getLayout

export default AdminSettingsPage
