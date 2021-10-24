//Numbers:

let x = 1253e5;
let y = 1253e-5;
console.log("NumberX: ", x);
console.log("NumberY: ", y);
console.log("typeOfNumberY: ", typeof(y));
console.log("typeOfInfinity: ", typeof(Infinity));
console.log("typeOfInfinity: ", typeof(-Infinity));
console.log("typeOfNaN: ", typeof(NaN));

//Hexadecimal:
let z = 0xff;
console.log("Hex: ", z);

//vary Base:
let w = 32;
console.log("base2: ", w.toString(2));
console.log("base10: ", w.toString(10));
console.log("base3: ", w.toString(3));
console.log("base8: ", w.toString(8));
console.log("base16: ", w.toString(16));

//number as object:
let v = new Number(32);
console.log("objectNumber Type: ", typeof(v));

//Number Methods:

let u = 32.5647;
console.log("tostring: ", u.toString());
console.log("tostringBase2: ", u.toString(2));
console.log("tostringBase8: ", u.toString(8));
console.log("toexponential2places: ", u.toExponential(2));
console.log("toexponential4places: ", u.toExponential(4));
console.log("tofixed: ", u.toFixed(0));
console.log("tofixed: ", u.toFixed(2));
console.log("tofixed: ", u.toFixed(3));
console.log("toPrecision: ", u.toPrecision());
console.log("toPrecision: ", u.toPrecision(2));
console.log("toPrecision: ", u.toPrecision(3));
console.log("valueOf: ", u.valueOf());

