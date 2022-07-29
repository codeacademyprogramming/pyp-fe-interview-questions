function counter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

const increment = counter();

increment();
increment();
increment();
increment();
console.log(increment());
