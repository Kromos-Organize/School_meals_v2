import { ValueSelectType } from '@/shared'

export const generateAlphabet = (): ValueSelectType[] => {
  const alphabet = []

  // 1040 - 1071 от а до я
  for (let i = 1040; i <= 1071; i++) {
    const letter = String.fromCharCode(i)

    alphabet.push({ label: letter, value: letter })
  }

  return alphabet
}

export const generateNumberClass = (): ValueSelectType[] => {
  const numberClass = []

  for (let i = 1; i <= 11; i++) {
    numberClass.push({ label: `${i}`, value: `${i}` })
  }

  return numberClass
}
