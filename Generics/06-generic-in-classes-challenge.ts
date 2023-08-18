//update the class so that it works with generics

class MyComponentExample {
  private myProps: unknown

  constructor(props: unknown) {
    this.myProps = props
  }

  get getMyProps() {
    return this.myProps
  }
}

const myComponentExample = new MyComponentExample({a: 'a', b: 'b'})

myComponentExample.getMyProps
