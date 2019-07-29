const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// tuple form
const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[0] = 40; // error

// type alias
type Drink = [string, boolean, number];

const coke: Drink = ['brown', true, 45];
coke[0] = 40; // error
