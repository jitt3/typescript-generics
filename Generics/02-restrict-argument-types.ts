const returnGenericRestrictedType = <T extends string>(a: T) => a

const myGenericRestrictedValue = returnGenericRestrictedType('hola')
