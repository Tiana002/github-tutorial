

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

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
 
//   const arr = [...arguments];
//   console.log(typeof arr);
//   console.log(Array.isArray(arr));
//   console.log(arr.length);
//   const last = arr[arr.length - 1];
//   console.log(last);
  
//   for (let i = 0; i < arr.length; i += 1) {
//     if (Array.isArray(arr)) {
//       for (let j = 0; j < arr[i].length; j += 1) {
//         console.log(arr[i][j]);
//         total += arr[i][j];
//       }
//       continue;
//     }
//     console.log(arr[i]);
//     // total += arr[i];
//   }

//   //Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice());



// function findLongestWord(string) {
//   // Change code below this line

// const stringArray = string.split(" ");

// let maxWord = stringArray[0];

// for (let i = 0; i < stringArray.length; i += 1) {
//   if(maxWord.length < stringArray[i].length) {
//     maxWord = stringArray[i];
    
//   }
  
// }
// return maxWord;
//   // Change code above this line
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));
// console.log(findLongestWord);



// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers());


// function filterArray(numbers, value) {
//   // Change code below this line
// let filterNumbers = [];
// for (let number of numbers) {
//  if (number > value) {
//    filterNumbers.push(number);
//  }

// }
// return filterNumbers;
//  // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([2], 0));

// function calculateTotalPrice(order) {
//   let total = 0;
//   let variable = [];
//   // Change code below this line
// for (let variable of order) {
//   total += variable;
// }
//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
// for (let number of numbers) {
  
 
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function getEvenNumbers(start, end) {
//   // Change code below this line
// const arr = [];
//  for (let i = start; i <= end; i += 1) {
  
//     if(i % 2 === 0) {
    
//      arr.push(i);
//    }
  
//   }
//  return arr;

//    // Change code above this line
//  }
//  console.log(getEvenNumbers(2, 5));
//  console.log(getEvenNumbers(3, 11));
//  console.log(getEvenNumbers(6, 12));
//  console.log(getEvenNumbers(8, 8));
//  console.log(getEvenNumbers(7, 7));

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) { 
//     // console.log(i);
//     if (i % divisor === 0) {
//       number = i;
//     // console.log(i)
//       return i;
//     }
//   }

//   return number;
//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));

// function includes(array, value) {
 
//   // Change code below this line
// for (let arr of array) {

//   if(arr === value) {
// return true;

//   }

// }

// return false;
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
//  // Change code above this line


// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//  price,
//  image,
//  tags,
  
// };
// console.log(product.name);
// console.log(product.price);
// console.log(product.image);
// console.log(product.tags);


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {

//  keys.push(key);
//  values.push(apartment[key])
//  };
 

// console.log([keys]);
// console.log([values]);

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//   console.log(key);
//     console.log(apartment[key]);
// }
  

//   // Change code above this line
// }

// function countProps(object) {
//   let propCount = 0;

//   // Change code below this line

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {

//       propCount += 1;
//       // console.log(key);
//     }
//   }
  
//   // Change code above this line
//   return propCount;
  
// }
// console.log(countProps);
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log( countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//   const values = Object.values(salaries);
//   console.log(values);
//   for(const value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log([hexColors]);
// console.log([rgbColors]);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

// for (const product of products) {
//   if (productName === product.name){
//     return product.price;
    
//   }
 
// }
// return null;
//   // Change code above this line
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));
// //#19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const Array = [];
// for (let product of products) {
//   if (propName in product) {
//  Array.push(product[propName]);
  
// }
// }
// return Array;
//   // Change code above this line
// }
//  console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


//   //#20

//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Change code below this line
   
//   for ( const product of products) {
//     if (Object.values(product).includes(productName)) {
//       return product.price * product.quantity;
//     }
//   }
  
//   return 0;
//     // Change code above this line
//   }
// console.log(calculateTotalPrice("Blaster"));  
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

//21

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;
// console.log(highTemperatures);

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);




// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   return { ...{completed, category, priority}, ...data };
  
//   // Change code above this line
// }
// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));

// function add(...args) {
//   console.log(args);
//   let sum = 0;
//   for (let arg of args) 
//   sum += arg;
//   return sum;
//   // Change code above this line
// }

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

// //# 32

// function addOverNum(firstNamber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNamber) {
//     total += arg;
//   }
//   }
//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

//# 33

// function findMatches(arr1, ...arr2) {
//   const matches = []; // Don't change this line
// for (let x of arr2){

//   if (arr1.includes(x)) {
// matches.push(x);
//   }
// }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));


//# 35

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     // const newBooks = this.books.splice();
//     const bookIndex = this.books.indexOf(oldName); 
     
//       this.books.splice(bookIndex, 1, newName)
//         return this.books;
//     // Change code above this line
//   },
 
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

//№ 36
// const atTheOldToad = {
//   // Change code below this line

  
//     potions: [],
//     getPotions() { 
//       return this.potions;
//     }
//     // Change code above this line
//   }; 
  
//   console.log(atTheOldToad.getPotions());


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
  
//   return this.potions;
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//   for (const potion of this.potions) {
    
//   if (potion.name.includes(newPotion.name)) {
//   // if (newPotion.name === potion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
    
//   }
//   this.potions.push(newPotion);
//   console.log();
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const name = potions[i];
      
//       if (potionName === name) {
        
//         potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
   
//   },
//   // updatePotionName(oldName, newName) {
//   //   const potionIndex = this.potions.indexOf(oldName);

//   //   if (potionIndex === -1) {
//   //     return `Potion ${oldName} is not in inventory!`;
//   //   }

//   //   this.potions.splice(potionIndex, 1, newName);
//   // },
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// // console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// // console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));

// //# 41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (let potion of this.potions) {
      
//     if (potion.name.includes(newPotion.name)) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {

//     if (potions[i].name === potionName) {
//       const potionIndex = potions.indexOf(potions[i]);
//       potions.splice(i, 1);
//     }
//     }
//      return `Potion ${potionName} is not in inventory!`;
   
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {

//     if (potions[i].name === oldName) {
//       potions[i].name = newName
//     }
      
//     }
//  return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

//    console.log(atTheOldToad.getPotions());
//   console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
//  console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
//  console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
//  console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));


// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// // Change code above this line

// console.log(result);
// console.log(pointer);

