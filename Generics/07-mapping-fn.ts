//update the concatenateUserName function so that it works with generics

const concatenateUserName = (user: unknown) => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  }
}
const users = [
  {
    firstName: 'arturo',
    lastName: 'fornes',
    age: 30,
  },
  {
    firstName: 'jose',
    lastName: 'villanueva',
    age: 35,
  },
  {
    firstName: 'Carlos',
    lastName: 'Estrada',
    age: 25,
  },
]

const usersWithFullName = users.map(concatenateUserName)
