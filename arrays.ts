// infers cars: string[]
const cars = ['ford', 'saab', 'bmw'];

// infers car: string
const inferredCar = cars[0];

// type inference error
cars.push(100);

// infers dates: Date[]
const dates = [new Date(), new Date(), new Date()];

// infers twoDim: string[][]
const twoDim = [
  ['something'],
  ['something else'],
  ['something something else']
];

// flexible array types
const importantDate = [new Date(), '2020-11-11'];
