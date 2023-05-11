import { NextPageWithLayout, getLayout } from '@/App'
import { ModerationPage } from '@/pagesLayer'

const Moderation: NextPageWithLayout = () => {
  return <ModerationPage />
}

Moderation.getLayout = getLayout

export default Moderation
