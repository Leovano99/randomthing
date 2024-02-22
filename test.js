const randomThing = require('./index');

// Generate random number
const randomNumber = randomThing.generateRandomNumber(1, 100);
console.log('Random Number:', randomNumber);

// Generate random array
const randomArray = randomThing.generateRandomArray(5, 1, 100);
console.log('Random Array:', randomArray);

// Calculate average of the random array
const average = randomThing.calculateArrayAverage(randomArray);
console.log('Average of the Random Array:', average);
