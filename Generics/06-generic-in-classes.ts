class MyComponent<Props> {
  private myProps: Props

  constructor(props: Props) {
    this.myProps = props
  }

  get getMyProps() {
    return this.myProps
  }
}

const myComponent = new MyComponent({a: 'a', b: 'b'})

myComponent.getMyProps
