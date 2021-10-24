//Javascript String practice...
let str = 'Apple, Banana, Orange';

console.log(str);

//Extracting string:
console.log("slice: ", str.slice(7, 13));
console.log("substring: ", str.substring(7,13));
console.log("substr: ", str.substr(7));

//Replacing Strings:
console.log("replace with case insensitive: ", str.replace(/apple, banana,/i, "I love"));
console.log("replace: ", str.replace("Apple, Banana,", "I love"));

//Concatination:
console.log("concatination: ", str.replace("Apple, Banana,", "I love").concat(" and Kiwi."));

//Lower and upper case:
console.log("Lowercase: ", str.replace("Apple, Banana,", "I love").toLowerCase());
console.log("Uppercase: ",str.replace("Apple, Banana,", "I love").toUpperCase());

//String padding:
let str2 = "45";
console.log("padstart: ", str2.padStart(6,0));
console.log("padEnd: ", str2.padEnd(6,0));

//Trimming:
let str3 = "   Anand  "
console.log("Trim: ", str3.trim());

//Extracting String Characters:
let str4 = "Hello Anand";
console.log("charAt: ", str4.charAt(2));
console.log(str4.charAt(4));
console.log(str4.charAt(6));
console.log("charCodeAt: ", str4.charCodeAt(6));

//Converting String to Array:
let str5 = "Anand";
console.log("string to array: ", str5.split());
console.log(str5.split(""));  //Use this one.
console.log(str5.split(" "));
console.log(str5.split("|"));
console.log(str5.split(","));

let str6 = "A,n,a,n,d";
console.log("string to array: ", str6.split());
console.log(str6.split(""));
console.log(str6.split(" "));
console.log(str6.split("|"));
console.log(str6.split(",")); //Use this one.

//String Search:

let str7 = "Please locate where 'locate' occures!";
console.log("indexOf: ", str7.indexOf("locate"));
console.log("last index of: ", str7.lastIndexOf("locate"));
console.log("when not found: ", str7.indexOf("honey")); //returns -1 when not present.

console.log("index of with 2 arguments: ", str7.lastIndexOf("locate", 15));
console.log(str7.indexOf("locate", 15));
console.log("search: ", str7.search("locate"));

//String Match:

let str8 = "The rain in SPAIN stays mainly in Plain";

console.log("match global: ", str8.match(/ain/g));
console.log("match global case insensitive: ", str8.match(/ain/gi));

//includes();

let str9 = "Hello Anand, Welcome back home.";
console.log("includes: ", str9.includes("Anand"));
console.log("includes: ", str9.includes("Road"));
console.log("includes with 2 arguments: ", str9.includes("Anand", 12));
console.log("includes with 2 arguments: ", str9.includes("Anand", 2));

//startsWith:

console.log("starts with: ", str9.startsWith("Anand"));
console.log("starts with: ", str9.startsWith("Hello"));
console.log("starts with 2 arguments: ", str9.startsWith("Anand", 6));

//endsWith:

console.log("ends with: ", str9.endsWith("home"));
console.log("ends with 2 arguments: ", str9.endsWith("Anand", 11));