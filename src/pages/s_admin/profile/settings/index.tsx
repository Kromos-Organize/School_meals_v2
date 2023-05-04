import { NextPageWithLayout, getLayout } from '@/App'
import { SettingsPage } from '@/pagesLayer'

const SAdminSettings: NextPageWithLayout = () => {
  return <SettingsPage />
}

SAdminSettings.getLayout = getLayout

export default SAdminSettings
