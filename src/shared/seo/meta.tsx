import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import { getTitle } from './lib'
import { MetaType } from './types'

export const Meta: FC<MetaType> = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        {description ? (
          <>
            <meta name={'description'} content={description} />
            <meta name={'og:title'} content={getTitle(title)} />
            <meta name={'og:description'} content={description} />
          </>
        ) : (
          <meta name={'robots'} content={'noindex, nofollow'} />
        )}
      </Head>
    </>
  )
}
