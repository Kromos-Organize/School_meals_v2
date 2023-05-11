import '@/styles/globals.css'

import { appWithI18Next } from 'ni18n'

import { WithAuth, withProviders, AppPropsWithLayout, i18nConfig } from '@/App'

function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <div className="wrapper">
      <WithAuth>
        <Component {...pageProps} />
      </WithAuth>
    </div>
  )
}

export default appWithI18Next(withProviders(App), i18nConfig)
