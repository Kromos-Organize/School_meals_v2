export const generateKey = () => {
  let rnd = ''

  while (rnd.length < 8) rnd += Math.random().toString(36).substring(2)

  return rnd.substring(0, 8)
}
