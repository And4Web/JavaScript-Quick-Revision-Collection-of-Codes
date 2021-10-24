//JS Arrays part-2:

const fruits = ["Apples","Bananas","Oranges","Mangoes","Melon"];
console.log("1. Fruit sort: ", fruits.sort());
console.log("2. Fruit Array new: ", fruits);
console.log("3. Fruit Array reverse: ", fruits.reverse());

const points = [40, 200, 56, 18, 84, 136, 37];
console.log("4. Number Array: ", points);
console.log("5. Number Array just sorted: ", points.sort());//sort() method checks 1st literal.
console.log("6. Number Array reverse wrong one: ", points.reverse());//reverse() method doesn't work on number arrays properly. use Compare functions to sort numbers:
const numReverseA = points.sort(function(a,b){return a-b;})
console.log("7. Number Array reverse correct one ascending: ", numReverseA);

console.log("8. Number Array Lowest value: ", points[0]);//Finding the Lowest value in the array.
console.log("9. Number Array Highest value: ", points[points.length - 1]);//Finding highest value in an array

const numReverseD = points.sort((a,b) => b-a)//arrow function use.
console.log("10. Number Array reverse correct one descending: ", numReverseD);

//To find Highest or Lowest using the above method is very inefficient so we will use Math.max or Math.min methods for the purpose.

const points2 = [40, 200, 56, 18, 84, 136, 37];
console.log("11. Highest using Math.max: ", Math.max.apply(null, points2));
console.log("12. Lowest using Math.min: ", Math.min.apply(null, points2));

