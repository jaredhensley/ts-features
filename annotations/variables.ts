// primitives
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// arrays
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// classes
class Car {}

// objects
let car: Car = new Car();
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annoations
// 1) functions that return the 'any' type (i.e. JSON.parse())
const json = '"x": 10 ,"y": 20';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) when we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let word of words) {
  if (word === 'green') {
    foundWord = true;
  }
}

// 3) variables whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let number of numbers) {
  if (number > 0) {
    numberAboveZero = number;
  }
}
