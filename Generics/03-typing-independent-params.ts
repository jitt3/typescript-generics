const returnAllValues = <A, B>(a: A, b: B) => {
  return {
    a,
    b,
  }
}

const a = returnAllValues(1, new Set<number>())
