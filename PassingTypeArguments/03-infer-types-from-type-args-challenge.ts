class MyComponentInferExample<Props> {
  private myProps: Props

  constructor(props: Props) {
    this.myProps = props
  }

  get getMyProps() {
    return this.myProps
  }
}

const cloneInferComponentExample = (component: unknown) => {
  return new MyComponentInferExample(component.getMyProps)
}

const myComponentInferExample = new MyComponentInferExample({a: 'a', b: 'b'})
const clonedComponentExample = cloneInferComponentExample(
  myComponentInferExample,
)
