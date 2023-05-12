import { NextPageWithLayout, DashLayout } from '@/App'
import { SettingsPage } from '@/pagesLayer'

const SAdminSettings: NextPageWithLayout = () => {
  return <SettingsPage />
}

SAdminSettings.getLayout = DashLayout

export default SAdminSettings
