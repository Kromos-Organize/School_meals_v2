export const checkFullNameUser = (fullName: string) => {
  const result = fullName
    .split(' ')
    .map(str => {
      if (str !== 'null') return str
    })
    .join(' ')

  return result.trim().length ? result : 'Пользователь'
}

const checkCharForAva = (name: string) => {
  if (!name) return ''

  return name.length ? name[0] : ''
}

export const showCharsFullName = (name: string, fname: string) => {
  return `${checkCharForAva(name)?.toUpperCase()}${checkCharForAva(fname)?.toUpperCase()}`
}
