const contactsArrExample = [{name: 'arturo'}, {name: 'jose'}, {name: 'carlos'}]

const contactsObjExampleOnlyStringKeysExample = contactsArrExample.reduce(
  (acc, contact) => {
    acc[contact.name] = contact
    return acc
  },
  {},
)
