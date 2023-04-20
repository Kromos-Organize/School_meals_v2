import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { NextPageWithLayout } from '@/App'

export const Logs: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Logs</title>
      </Head>
      <div>Logs</div>
    </>
  )
}
