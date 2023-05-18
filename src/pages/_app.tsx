import { SessionProvider } from 'next-auth/react'
import { appWithI18Next } from 'ni18n'

import { withProviders, AppPropsWithLayout, i18nConfig } from '@/App'

function App({ Component, pageProps }: AppPropsWithLayout) {
  return <Component {...pageProps} />
}

export default appWithI18Next(withProviders(App), i18nConfig)
