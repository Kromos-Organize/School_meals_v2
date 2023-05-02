export const set = (key: string, value: any) => {
  if (key && value) {
    const stringValue = typeof value === 'string' ? value : JSON.parse(value)

    localStorage.setItem(key, stringValue)
  }
}

export const get = (key: string) => {
  const value = localStorage.getItem(key)

  return value ?? undefined
}
