export const sortArrayByKey =
  <MT>(type: keyof MT) =>
  (prev: MT, next: MT) => {
    if (prev[type] < next[type]) return -1
    if (prev[type] > next[type]) return 1

    return 0
  }

export const sortArrayByKeys =
  <MT>(types: (keyof MT)[]) =>
  (prev: MT, next: MT) => {
    let resultSort = 0

    for (let i = 0; i < types.length; i++) {
      if (prev[types[i]] < next[types[i]]) {
        resultSort = -1
        break
      }
      if (prev[types[i]] > next[types[i]]) {
        resultSort = 1
        break
      }
    }

    return resultSort
  }
