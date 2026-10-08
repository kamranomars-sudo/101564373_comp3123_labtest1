// COMP3123 Lab Test 1 | Kamran Omar | 101564373
// Question 1: Keep string values and convert them to lowercase.
const lowerCaseWords = (items) => new Promise((resolve, reject) => {
  if (!Array.isArray(items)) {
    reject(new TypeError('Input must be an array.'));
    return;
  }
  const words = items.filter((item) => typeof item === 'string')
    .map((word) => word.toLowerCase());
  resolve(words);
});

const mixedValues = ['HELLO', 101564373, 'NodeJS', false, 'KAMRAN', null, 'ES6'];
lowerCaseWords(mixedValues)
  .then((words) => console.log('Lowercase words:', words))
  .catch((error) => console.error('Question 1 error:', error.message));
