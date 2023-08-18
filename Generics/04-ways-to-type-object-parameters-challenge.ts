//write a function that takes an object with two properties of any
//type as input and returns an object with two properties of the type you entered

const returnObjectFromParamsExample = (params: {a: unknown; b: unknown}) => {
  return {
    one: params.a,
    two: params.b,
  }
}
