const makeStatus = <Statuses extends string>(statuses: Statuses[]) => {
  return statuses
}

const statusesResult = makeStatus(['success', 'failure'])
