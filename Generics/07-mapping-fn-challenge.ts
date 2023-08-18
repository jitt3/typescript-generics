const concatenateUserNameExample = <
  T extends {firstName: string; lastName: string},
>(
  user: T,
) => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  }
}
const usersExample = [
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

const usersWithFullNameExample = usersExample.map(concatenateUserNameExample)
