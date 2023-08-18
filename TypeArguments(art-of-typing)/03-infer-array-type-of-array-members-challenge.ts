//return the type of each member of the array
const makeStatusExample = <Statuses extends string[]>(statuses: Statuses) => {
  return statuses
}

const statusesResultExample = makeStatusExample(['success', 'failure'])

//example ['success', 'failure'] => ('success'|'failure')[]
