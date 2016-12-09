const WError = require("verror").WError;

class SubError extends WError {}

class SubSubError extends SubError {}

const test = new SubError();

console.log(test.stack);

const test2 = new SubSubError();

console.log(test2.stack);

console.log("test instanceof Error", test instanceof Error);
console.log("test instanceof SubError", test instanceof SubError);
console.log("test2 instanceof SubError", test2 instanceof SubError);
