//JS Arrays part-1:

const fruits = ["Apples","Bananas","Oranges","Mangoes","Melon"];
console.log("1. Fruit Array: ", fruits);

console.log("2. Fruit Array length: ", fruits.length);
console.log("3. Fruit Array toString: ", fruits.toString());

console.log("4. Fruit Array Join: ", fruits.join());
console.log("5. Fruit Array Join: ", fruits.join(''));
console.log("6. Fruit Array Join: ", fruits.join(' '));
console.log("7. Fruit Array Join: ", fruits.join('*'));
console.log("8. Fruit Array Join: ", fruits.join('|'));

console.log("9. Fruit Array pop: ", fruits.pop());
console.log("10. Fruit Array push: ", fruits.push("Melon"));
console.log("11. Fruit Array after push: ", fruits);

console.log("12. Fruit Array shift: ", fruits.shift());
console.log("13. Fruit Array after shift: ", fruits);

console.log("14. Fruit Array unshift: ", fruits.unshift("Apples"));
console.log("15. Fruit Array after unshift: ", fruits);
console.log("16. Fruit element no. 3: ", fruits[2]);

console.log("17. Fruit element delete: ", delete fruits[2]);
console.log("18. Fruit array after delete, leaves Holes in Array: ", fruits); //don't use it. use pop. use splice.

console.log("19. fruit array splice: ", fruits.splice(2,1)) //removed undefined holes.
console.log("20. fruit array after splice: ", fruits) //removed undefined holes.
console.log("21. fruit array splice: ", fruits.splice(2,1, "Pumpkin", "Carrot"))
console.log("22. fruit array after splice: ", fruits);
