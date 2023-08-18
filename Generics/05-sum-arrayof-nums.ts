const sum = <T>(array: T[], mapperFn: (item: T) => number): number => {
  return array.reduce(
    (accumulator, currentItem) => accumulator + mapperFn(currentItem),
    0,
  )
}

const sumOfNumbers = sum(
  [
    '1',
    2,
    {
      a: 1,
    },
  ],
  (item) => {
    if (typeof item === 'string') {
      return parseInt(item, 10)
    }
    if (typeof item === 'object' && 'a' in item) {
      return item.a
    }
    return item
  },
)
