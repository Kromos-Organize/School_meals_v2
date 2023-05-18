import { SessionProvider } from 'next-auth/react'
import { appWithI18Next } from 'ni18n'

import { withProviders, AppPropsWithLayout, i18nConfig } from '@/App'

function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default appWithI18Next(withProviders(App), i18nConfig)
