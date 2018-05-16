const foo = (bar) => () => bar;
console.log(foo('abc'));
console.log(foo('abc')());
