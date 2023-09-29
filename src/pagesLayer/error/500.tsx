export default function Custom500() {
  return <h1>500 - Ошибка на сервере</h1>
}
// import { NextPage } from 'next'
//
// interface Error500Props {
//   statusCode?: number
// }
//
// const Error500: NextPage<Error500Props> = ({ statusCode }) => {
//   return (
//     <div>
//       <h1>500 - Внутренняя ошибка сервера</h1>
//       {statusCode && <p>Код ошибки: {statusCode}</p>}
//     </div>
//   )
// }
//
// export default Error500
