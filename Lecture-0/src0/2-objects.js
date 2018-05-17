
const o = new Object()
o.firstName = 'Jordan'
o.lastName = 'Hayashi'
o.isTeaching = true
o.greet = function() { console.log('Hello!') }

console.log(JSON.stringify(o))

// object literal
const o2 = {}
o2['firstName'] = 'Jordan'
const a = 'lastName'
o2[a] = 'Hayashi'

const o3 = {
  1: 1,
  firstName: 'Jordan',
  lastName: 'Hayashi',
  greet: function() {
    console.log('hi')
  },
  address: {
    street: "Main st.",
    number: '111'
  }
}

const key = 'number'
o3[key]
o3.1 // not coerce to string
o3[1]
// see 3-objectsMutation.js for more objects
