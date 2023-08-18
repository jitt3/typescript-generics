//update the function to grab the keys of the object(with types)
const typedObjKeysExample = (obj: unknown) => {
  return Object.keys(obj)
}
const myObjExample = {a: 1, b: 2}
const myObjKeysExample = typedObjKeysExample(myObjExample)

//example
// {a:1, b:2} => ['a', 'b']
