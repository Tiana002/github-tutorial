

// 11\32
// function calculateEngravingPrice(message, pricePerWord) {
 
//  result = (message.split(" ")).length * pricePerWord;
//  console.log(result);

// // return (message.split(" ")).length * pricePerWord;
//  return result;

 
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);

// // 12\32
// function makeStringFromArray(array, delimiter) {
//   let string;
  
//   string = array.join(delimiter);
// console.log(string);

//   // Change code above this line
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_");

//13\32
// function slugify(title) {
//   // Change code below this line
//  const slug = title.toLowerCase().split(' ').join('-');

// console.log(slug);

// return slug;
//   // Change code above this line
// }
// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");

//14/32
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, 4);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(2, 5);
// console.log(lastThreeEls);
//-------
// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); 
// console.log(multiply(1, 2, 3, 4)); 
// console.log(multiply(1, 2, 3, 4, 5)); 

//16/32

// 17/32
// const start = 3;
// const end = 7;

// for (let i = 3; i <= 7; i += 1) { // Change this line
//   console.log(i);
// }

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
 
  const arr = [...arguments];
  console.log(typeof arr);
  console.log(Array.isArray(arr));
  console.log(arr.length);
  const last = arr[arr.length - 1];
  console.log(last);
  
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr)) {
      for (let j = 0; j < arr[i].length; j += 1) {
        console.log(arr[i][j]);
        total += arr[i][j];
      }
      continue;
    }
    console.log(arr[i]);
    // total += arr[i];
  // for (const argument of arguments) {
  //   total += argument; 
  }

  //Change code above this line
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice());