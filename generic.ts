function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Aswathy"));
console.log(identity<number>(25));
