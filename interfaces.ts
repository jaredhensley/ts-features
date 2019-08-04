interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `${this.name} ${this.year} ${this.broken}`;
  }
};

const Drink = {
  color: 'Brown',
  carbonated: true,
  sugar: 40,
  summary() {
    return `${this.color} ${this.carbonated} ${this.sugar}`;
  }
};

// use interfaces over long inline type annotations
// resuable naming conventions
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(Drink);
