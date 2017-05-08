//Input
var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

//output
[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
    username: 'nore2000' }
]

function addUsername(list) {
  return list.map(dev => {
    let current = new Date();
    dev.username = dev.firstName.toLowerCase() + dev.lastName.charAt(0).toLowerCase() + (current.getFullYear() - dev.age);
    return dev;
  })
}
