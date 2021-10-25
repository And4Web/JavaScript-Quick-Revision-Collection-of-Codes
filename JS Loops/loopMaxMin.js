const array = [40, 200, 56, 18, 84, 136, 37];
console.log(array);

const arrayMax = function(arr){
  let len = arr.length;
  let max = -Infinity;

  while(len > 0){
    if(arr[len] > max){
      max = arr[len];
    }
    len--;
  }
  return max;
}

const arrayMin = function(arr){
  let len = arr.length - 1;
  let min = 300;

  while(len >= 0){
    if(arr[len] < min){
      min = arr[len];
    }
    len--;
  }
  return min;
}
console.log("Min: ", arrayMin(array));
console.log("Max: ", arrayMax(array));

