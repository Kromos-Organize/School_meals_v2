export const saveValue = (key: string, value: any) => {
  if (key && value) {
    localStorage.setItem(key, JSON.parse(value))
  }
}

export const getValue = (key: string) => {
  const value = localStorage.getItem(key)

  return value ?? undefined
}
