// #1
const amount = [12, 5, 8, 130, 8, 44]
const foodNames = ['kale', 'apple', 'orange', 'garlic','banana', 'avocado' ]
const answer = { kale: 12, apple: 5, orange: 8, garlic: 130, banana: 8, avocado: 44 }

//Solution
const foodCounter = (foodNames, amount) => {
  return foodNames.reduce((acc, name, i) => {
    acc[name] = amount[i]
    return acc;
  }, {});
}

// #2
const og = { kale: 12, apple: 5, orange: 8, garlic: 130, banana: 8, avocado: 44 };
const add = { kale:2, apple: 1, orange: 3, garlic: 4, banana: 2, avocado: 3 };
const answer = { kale: 14, apple: 6, orange: 11, garlic: 134, banana: 10, avocado: 47 };

//Solution
const createNewList = (og, add) => {
  return Object.keys(og).reduce((acc, key) => {
    acc[key] = og[key] + add[key]
    return acc;
  }, {})
}

// #3
const og = { kale: 12, apple: 5, orange: 8, garlic: 130, banana: 8, avocado: 4 };
const add = { kale:2, apple: 1, orange: 3, garlic: 4, banana: 2, avocado: 3 };
const answer = { kale: 14, apple: 6, orange: 11, garlic: 134, banana: 10, avocado: 7 };

//Solution
const addList = (og, add) => {
  const keys = Object.keys(og);
  const answer = {};
  keys.forEach(key => {
    answer[key] = og[key] + add[key];
    return answer;
  })
  return answer;
}

// #4
const og = { kale: null, apple: 5, orange: null, garlic: 130, banana: 8, avocado: 44 };
const add = { kale: null, apple: null, orange: 3, garlic: 4, banana: 2, avocado: 3 };
const answer = { kale: 0, apple: 5, orange: 3, garlic: 134, banana: 10, avocado: 47 };

//Solution
const sumList = (og, add) => {
  return Object.keys(og).reduce((obj, key) => {
    obj[key] = og[key] + add[key];
    return obj;
  }, {});
}

//#5
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

//#6
const obj = { kale: 12, apple: 5, orange: 8, garlic: 130, banana: 8, avocado: 44 };
const answer = { kale: 12, apple: 9, orange: 8, garlic: 130, banana: 8, avocado: 44 };

//Solution
const addItems = (obj, fruit, num) => {
  obj.hasOwnProperty(fruit) ? obj[fruit] += num : obj[fruit] = num;
  return obj;
}
