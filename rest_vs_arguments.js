function myFunc(...rest) {
  return typeof rest;
}

console.log(myFunc());

const myFunc = () => {
  console.log(arguments);
};

myFunc();
