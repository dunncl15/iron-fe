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

//#2
const obj = { kale: 12, apple: 5, orange: 1 };
const answer = [{ kale: 12 }, { apple: 5 }, { orange: 1 }];

//Solution
const makeArrayObjs = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    let newObj = Object.assign({}, {[key]: obj[key]});
    acc.push(newObj);
    return acc;
  }, []);
}

//#3
const obj = { kale: 12, apple: 5, orange: 8, garlic: 130, banana: 8, avocado: 44 };
const answer = { kale: 12, apple: 9, orange: 8, garlic: 130, banana: 8, avocado: 44 };

//Solution
const addItems = (obj, fruit, num) => {
  obj.hasOwnProperty(fruit) ? obj[fruit] += num : obj[fruit] = num;
  return obj;
}
