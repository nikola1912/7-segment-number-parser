const parse = require("./parser.js");

const example1 = 
"    _  _     _  _  _  _  _ " +
"  | _| _||_||_ |_   ||_||_|" +
"  ||_  _|  | _||_|  ||_| _|" +
"                           ";

const example2 = "" +
" _     _  _     _  _  _  _  _  _  _  _  _  _  _  _     _  _     _ " +
"| |  | _| _||_||_ |_   ||_||_||_|| ||_||_|  ||_ |_ |_| _| _|  || |" +
"|_|  ||_  _|  | _||_|  ||_| _|| ||_| _||_|  ||_| _|  | _||_   ||_|" +
"                                                                  ";

console.log(parse(example1));
console.log(parse(example2));