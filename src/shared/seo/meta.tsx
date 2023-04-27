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
            <meta
              name={'keywords'}
              content={
                'школа, питание, подсчет, подсчет затрат, отчет, вычисление, ведение, бухгалтерия, школьная столовая, пища, ученики, государство, родители'
              }
            />
            <meta name={'og:title'} content={getTitle(title)} />
            <meta name={'og:description'} content={description} />
            <meta name={'og:site_name'} content={'School meals'} />
            <meta name={'og:locale'} content={'ru_RU'} />
          </>
        ) : (
          <meta name={'robots'} content={'noindex, nofollow'} />
        )}
      </Head>
    </>
  )
}
