// JS Loops:

const cars = ["Tata", "Mahindra", "Maruti", "Force", "Hyundai"];
const cars2 = ["Toyota", "Ford", "Kia", "Suzuki", "Honda"];
const cars3 = ["BMW", "Mercedes", "Audi", "Jaguar", "Lamborgini"];

let txt = "";
let txt2 = "";
let txt3 = "";

//Using For Loop:
for (let i = 0; i < cars.length; i++){
  txt += cars[i];
  console.log(`car index ${i}: ${cars[i]}`);
}

//Using While Loop:
let j = 0;
while(j < cars2.length){
  txt2 += cars2[j];
  console.log(`car index ${j + cars.length}: ${cars2[j]}`);
  j++;
}

//using the Do-While Loop:
let k = 0;
do{
  txt3 += cars3[k];
  console.log(`car index ${k + cars.length + cars2.length}: ${cars3[k]}`);
  k++;
} while(k < cars3.length);

//For-In Loop:

const carsArr = ["Tata", "Mahindra", "Maruti", "Force", "Hyundai"];
const carsObj = {
  company1: "Tata",
  company2: "Mahindra",
  company3: "Maruti",
  company4: "Force",
  company5: "Hyundai",
}
console.log("Array: ", carsArr);
console.log("Object: ", carsObj);

let list = "";
for(let x in carsObj){
  list += x + "\n";
  
}
for(let x in carsObj){
  list += carsObj[x] + "\n";
  
}
for(let x in carsObj){
  list += x + ":" + carsObj[x] + "\n";
  
}
console.log(list);
console.log(typeof list);
console.log(list.split(","));

//REMEMBER: For-In loops through an object and x gives the properties while object[x] gives values. For Arrays x gives the index number while array[x] is undefined and gives gibberish. see below:

let numArr = [34, 45, 72, 18, 43, 2, 11];
let indNum = "";
for(let x in numArr){
  indNum += x + "\n";
}
for(let x in numArr){
  indNum += indNum[x];
}
console.log("Here Starts: \n", indNum);

//If index order is important, don't use For-In, instead use For, For-Of or ForEach.

//For-Of Loop:

const carsArr = ["Tata", "Mahindra", "Maruti", "Force", "Hyundai"];
let numArr = [34, 45, 72, 18, 43, 2, 11];

let coll = "";
let coll2 = "";

for(let x of carsArr){
  coll += x + "\n";
}
console.log(coll);

for(x of numArr){
  coll += x + "\n";
}
console.log(coll);

//Max number using Loop:

let numArrMax = [14, 15, 22, 18, 13, 2, 11];

function max(arr){
  let len = arr.length;
  let max = -Infinity;
  for(let i=0; i<len; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

function elements(arr){
  ele = "";
  for(let x of arr){
    ele += x + "\n";
}
return ele;
}

console.log(`Array is:\n${elements(numArrMax)}`);
console.log(`Max is:\n${max(numArr)}`);

