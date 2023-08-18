//update the sumExample function so that it works generics

const sumExample = (
  array: unknown,
  mapperFn: (item: unknown) => number,
): number => {
  return array.reduce(
    (accumulator, currentItem) => accumulator + mapperFn(currentItem),
    0,
  )
}
