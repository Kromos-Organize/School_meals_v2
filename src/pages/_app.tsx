import '@/styles/globals.css'

import { withProviders, AppPropsWithLayout } from '@/App'

function App({ Component, pageProps }: AppPropsWithLayout) {
  return <Component {...pageProps} />
}

export default withProviders(App)
