type ReturnDiscriminatedUnionExample<
  TFunction extends (...args: any[]) => any,
> =
  | {
      type: 'success'
      result: ReturnType<TFunction>
    }
  | {
      type: 'failure'
      error: Error
    }

const makeSafeExample =
  (func: unknown) =>
  (...args: unknown): ReturnDiscriminatedUnionExample => {
    try {
      const result = func(...args)
      return {
        type: 'success',
        result,
      }
    } catch (e) {
      return {
        type: 'failure',
        error: e as Error,
      }
    }
  }

const makeSafeExampleFinal =
  <TFunction extends (...args: any[]) => any>(func: TFunction) =>
  (
    ...args: Parameters<TFunction>
  ): ReturnDiscriminatedUnionExample<TFunction> => {
    try {
      const result = func(...args)
      return {
        type: 'success',
        result,
      }
    } catch (e) {
      return {
        type: 'failure',
        error: e as Error,
      }
    }
  }
