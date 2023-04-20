import '@/styles/globals.css'

import { appWithI18Next } from 'ni18n'

import { withProviders, AppPropsWithLayout, i18nConfig } from '@/App/'

function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <div className="wrapper">
      <Component {...pageProps} />
    </div>
  )
}

export default appWithI18Next(withProviders(App), i18nConfig)
