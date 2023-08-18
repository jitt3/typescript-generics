const contactsArr = [{name: 'arturo'}, {name: 'jose'}, {name: 'carlos'}]
type ContactsObjExample = 'arturo' | 'jose' | 'carlos'

const contactsObjExampleOnlyStringKeys = contactsArr.reduce<
  Record<string, {name: string}>
>((acc, contact) => {
  acc[contact.name] = contact
  return acc
}, {})

const contactsObjExampleExactKeys: Record<
  string & ContactsObjExample,
  {name: string}
> = contactsArr.reduce<Record<string | ContactsObjExample, {name: string}>>(
  (acc, contact) => {
    acc[contact.name] = contact
    return acc
  },
  {},
)

contactsObjExampleExactKeys.arturo.name
