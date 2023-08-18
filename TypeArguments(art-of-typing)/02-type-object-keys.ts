const typedObjKeys = <TObj extends object>(obj: TObj) => {
  return Object.keys(obj) as Array<keyof TObj>
}

const typeObjKeysTwo = <TKey extends string>(obj: Record<TKey, any>) => {
  return Object.keys(obj) as TKey[]
}

const myObj = {a: 1, b: 2}
const myObjKeys = typedObjKeys(myObj)
