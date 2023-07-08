import Head from 'next/head'
import { FC } from 'react'

import { getTitle } from './lib'
import { MetaType } from './types'

export const Meta: FC<MetaType> = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png"></link>
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png"></link>
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png"></link>
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png"></link>
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png"></link>
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png"></link>
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png"></link>
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png"></link>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/android-icon-192x192.png"
        ></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"></link>
        <link rel="manifest" href="/manifest.json"></link>
        <meta name="msapplication-TileColor" content="#ffffff"></meta>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
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
