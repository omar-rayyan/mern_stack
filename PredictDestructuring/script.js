// Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda'];
const [randomCar] = cars;
const [, otherRandomCar] = cars;

console.log(randomCar);
console.log(otherRandomCar);

// Prediction
Tesla
Mercedes



// Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla',
};
const { name: otherName } = employee;

console.log(name);
console.log(otherName);

// Prediction
ReferenceError: name is not defined
Elon



// Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
  };
  
  const password = '12345';
  const { password: hashedPassword } = person;
  
  console.log(password);
  console.log(hashedPassword);

// Prediction
12345
undefined



// Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers; // first = 2
const [, , , second] = numbers; // second = 5
const [, , , , , , , , third] = numbers; // third = 2

console.log(first == second);
console.log(first == third);

// Prediction
false
true



// Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3],
  };
  
  const { key } = lastTest; // key = 'value'
  const { secondKey } = lastTest; // secondKey = [1, 5, 1, 8, 3, 3]
  const [, willThisWork] = secondKey; // willThisWork = 5
  
  console.log(key);
  console.log(secondKey);
  console.log(secondKey[0]);
  console.log(willThisWork);

// Prediction
value
[1, 5, 1, 8, 3, 3]
1
5