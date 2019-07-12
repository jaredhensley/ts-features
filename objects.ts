const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 55,
    lng: 30
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age, name }: { age: number } = profile;

const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
