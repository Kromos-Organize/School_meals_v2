import { appWithI18Next } from 'ni18n'

import { WithAuth, withProviders, AppPropsWithLayout, i18nConfig } from '@/App'

function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <WithAuth>
      <Component {...pageProps} />
    </WithAuth>
  )
}

export default appWithI18Next(withProviders(App), i18nConfig)
