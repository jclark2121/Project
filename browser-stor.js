const myKey = 'myKey';
const myValue = 'myValue';
localStorage.setItem(myKey, myValue);

const storedValue = localStorage.getItem(myKey);
console.log(storedValue);