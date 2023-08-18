class MyComponentInfer<Props> {
  private myProps: Props

  constructor(props: Props) {
    this.myProps = props
  }

  get getMyProps() {
    return this.myProps
  }
}

const cloneInferComponent = <T>(component: MyComponentInfer<T>) => {
  return new MyComponentInfer(component.getMyProps)
}

const myComponentInfer = new MyComponentInfer({a: 'a', b: 'b', c: '1', d: 1})
const clonedComponent = cloneInferComponent(myComponentInfer)

console.log(myComponent.getMyProps)
