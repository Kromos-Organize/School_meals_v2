type HumanType = {
  fname: string
  name: string
  lname: string
}

export const glueFullName = <HT>(human: HT): string => {
  const { fname, name, lname } = human as HumanType

  if (lname) return `${fname} ${name} ${lname}`

  return `${fname} ${name}`
}
