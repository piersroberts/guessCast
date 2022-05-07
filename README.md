# guessCast

Reads a string, guesses the type and returns the value cast to the guessed type. Useful when dealing with data sources not originally designed for machines, or some types of spreadsheet data.

Supports Numbers, Booleans or defaults to the original string.

Future versions may support dates.

## Usage

```js
const guessCast = require("guessCast");

const someString = "100.300";

const someNumber = guessCast(someString);

console.log(someNumber); // prints 100.3
```
