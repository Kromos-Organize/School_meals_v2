export const getCookie = (set_cookies: string, name_cookie: string) => {
  return set_cookies.slice(set_cookies.indexOf(name_cookie)).split('=')[1].split(';')[0]
}
