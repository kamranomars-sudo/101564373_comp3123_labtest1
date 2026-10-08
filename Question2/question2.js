// COMP3123 Lab Test 1 | Kamran Omar | 101564373
// Question 2: Demonstrate resolved and rejected promises.
const resolvedPromise = () => new Promise((resolve) => {
  setTimeout(() => resolve({ message: 'delayed success!' }), 500);
});

const rejectedPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => reject({ error: 'delayed exception!' }), 500);
});

resolvedPromise()
  .then((result) => console.log('Resolved:', result))
  .catch((error) => console.error('Unexpected error:', error));

rejectedPromise()
  .then((result) => console.log('Unexpected success:', result))
  .catch((error) => console.error('Rejected:', error));
