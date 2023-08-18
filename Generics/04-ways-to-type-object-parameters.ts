const returnObjectFromParamsOne = <A, B>(params: {a: A; b: B}) => {
  return {
    one: params.a,
    two: params.b,
  }
}

type Params<A, B> = {
  a: A
  b: B
}
const returnObjectFromParamsTwo = <A, B>(params: Params<A, B>) => {
  return {
    one: params.a,
    two: params.b,
  }
}

const abc = returnObjectFromParamsOne({a: 1, b: '2'})
const abcd = returnObjectFromParamsTwo({a: 1, b: '2'})
