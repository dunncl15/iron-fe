//Count the duplicates
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabbcdeB" -> 2 # 'a' and 'b'
// "indivisibility" -> 1 # 'i'
// "Indivisibilities" -> 2 # 'i' and 's'
// "aa11" -> 2 # 'a' and '1'

function duplicateCount(text){
  let count = 0;
  const output = text.split('').reduce((acc, letter) => {
    let lowercase = letter.toLowerCase();
    acc[lowercase] ? acc[lowercase]++ : acc[lowercase] = 1;
    return acc;
  }, {});
   Object.keys(output).forEach(key => {
    if (output[key] > 1) {
      count++;
    }
  })
  return count;
}
