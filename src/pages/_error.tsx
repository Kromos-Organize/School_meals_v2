// import { Layout } from '../App/layouts/dashLayout/index'
//
// export default () => (
//   <Layout title={Error}>
//     <p>sorry</p>
//   </Layout>
// )

// 'use client'
//
// import { Simulate } from 'react-dom/test-utils'
//
// import error = Simulate.error
//
// export default function ErrorWrapper({ error: string }: { error: Error }) {
//   return <h1>Oops!!! {error.name}</h1>
// }

// import { NextPageContext } from 'next'
//
// // const  ErrorType = {
// //   statusCode?: number;
// // }
// interface ErrorProps {
//   statusCode?: number
// }
// export const Error: React.FC<ErrorProps> = ({ statusCode }) => {
//   return (
//     <p>{statusCode ? `На сервере возникла ошибка ${statusCode}` : `Ошибка возникла на клиенте`}</p>
//   )
// }
//
// Error.getInitialProps = ({ res, err }: NextPageContext) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404
//
//   return { statusCode }
// }

import { NextPage, NextPageContext } from 'next'

import Error500 from './Error500'

interface CustomErrorProps {
  statusCode?: number
}

const CustomError: NextPage<CustomErrorProps> = ({ statusCode }) => {
  if (statusCode === 500) {
    return <Error500 statusCode={statusCode} />
  }

  return (
    <div>
      <h1>Ошибка {statusCode}</h1>
      <p>Произошла ошибка на сервере.</p>
    </div>
  )
}

CustomError.getInitialProps = ({ res, err }: NextPageContext) => {
  // eslint-disable-next-line no-nested-ternary
  //const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  const statusCode = 500

  return { statusCode }
}

export default CustomError

// import { NextPageContext } from 'next';
//
// interface ErrorProps {
//   statusCode?: number;
// }
//
// const Error: React.FC<ErrorProps> = ({ statusCode }) => {
//   let errorMessage = '';
//
//   if (statusCode) {
//     errorMessage = `На сервере возникла ошибка ${statusCode}`;
//   } else {
//     errorMessage = 'Ошибка возникла на клиенте';
//   }
//
//   return <p>{errorMessage}</p>;
// };
//
// Error.getInitialProps = ({ res, err }: NextPageContext) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
//
//   return { statusCode };
// };
//
// export default Error;
