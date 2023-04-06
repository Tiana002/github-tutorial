// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   // Chande code below this line
//   function makeMessage(pizzaName, callback) {
//     callback(pizzaName);
//     return callback(pizzaName);
//   }
//  console.log(makeMessage("Royal Grand", makePizza));
//  console.log(makeMessage("Ultracheese", deliverPizza));

// //# 5
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line
  
//     for (let i = 0; i < orderedItems.length; i += 1) {
//       totalPrice += orderedItems[i];
//     }
  
//     // Change code above this line
//     return totalPrice;
//   }
  
// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Полі", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Ківі", score: 94 },
//   ];
  
//   const inAscendingScoreOrder = students.sort(
//     (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
//   );
  
//   const inDescendingScoreOrder = students.sort(
//     (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
//   );
  
//   const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//     firstStudent.name.localeCompare(secondStudent.name)
//   );
//   console.log(inAscendingScoreOrder);
//   console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);


// //10

// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
  
//     orderedItems.forEach(item => {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   }
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log();

//   //#11
//   // Change code below this line
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Change code above this line
//     return filteredNumbers;
//   }
//   console.log(filterArray([1, 2, 3, 4, 5], 3));
//   console.log(filterArray([1, 2, 3, 4, 5], 4));
//   console.log(filterArray([1, 2, 3, 4, 5], 5));
//   console.log(filterArray([12, 24, 8, 41, 76], 38));
//   console.log(filterArray([12, 24, 8, 41, 76], 20));

//12

// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Change code above this line
//     return commonElements;
//   }
// console.log(getCommonElements([1, 2, 3], [2, 4])); 
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); 
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); 
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); 
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));  

//# 13

// function changeEven(numbers, value) {
//     // Change code below this line
//     const newChangeEven = [];
//     numbers.forEach(numbers => {
//         if (numbers % 2 === 0) {
//             newChangeEven.push(numbers + value);
//           } else {
//             newChangeEven.push(numbers)
//           }
        
//     });
//     return newChangeEven;
//     // for (let i = 0; i < numbers.length; i += 1) {
//     //   if (numbers[i] % 2 === 0) {
//     //     numbers[i] = numbers[i] + value;
//     //   }
//     // }
//     // Change code above this line
//   }
//   console.log(changeEven([1, 2, 3, 4, 5], 10));
//   console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
//   console.log(changeEven([17, 24, 68, 31, 42], 100));
//   console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

//# 17
const users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      skills: ["ipsum", "lorem"],
      gender: "male",
      age: 37,
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
      gender: "female",
      age: 34,
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      skills: ["nulla", "anim", "proident", "ipsum", "elit"],
      gender: "male",
      age: 24,
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      skills: ["adipisicing", "irure", "velit"],
      gender: "female",
      age: 21,
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      skills: ["ex", "culpa", "nostrud"],
      gender: "male",
      age: 27,
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      skills: ["non", "amet", "ipsum"],
      gender: "male",
      age: 38,
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      skills: ["lorem", "veniam", "culpa"],
      gender: "female",
      age: 39,
    },
  ];
  
  
// const getUserNames = users => {
    
//     const result = users.map(user => user.name);
//     result.pus(users.name);
//     return result;
   
//       }
//       // Change code above this line
      

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

//  const evenNumbers =  numbers.filter(number => {
//     return number % 2; 
//  });
       
//  const oddNumbers = numbers.filter(number => {
//     return !(number % 2)
//  });

// console.log(evenNumbers);
// console.log(oddNumbers);


// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const result = numbers.filter((item) => !(item % 2))
//     // .map((item, _, arr) => {

//     //     console.log(arr);
//     //     return item * 2
//     // })
// console.log(result);

// # 34

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
//   // Change code below this line
  
//   const totalPlayTime = playtimes.reduce((acc, value) => {
//     return acc + value;
//   }, 0);
  
//   // Change code above this line
//   const averagePlayTime = totalPlayTime / playtimes.length;
//     console.log(playtimes);
//     console.log(totalPlayTime);
//     console.log(averagePlayTime);


// // 35
// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
//   // Change code below this line
  
//   const totalAveragePlaytimePerGame = players.reduce((total, player) => { 
//     return (player.playtime / player.gamesPlayed) + total;
//   }, 0);

//   console.log(players);
//   console.log(totalAveragePlaytimePerGame);

//# 37

// const getTotalFriendCount = users => {
//     return users.reduce((total, {friends}) => {
      
//    return total + friends.length;
//   }, 0)
//   };
//  console.log(getTotalFriendCount({friends}, 0));
//    console.log();


// // № 41
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line
  
//   const sortedByAuthorName = [...books].sort((firstBook, secondBook)  => firstBook.author.localeCompare(secondBook.author));
  
//   const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook)  => secondBook.author.localeCompare(firstBook.author));
  
//   const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);
  
//   const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

//   console.log(sortedByAuthorName);
//   console.log(sortedByAscendingRating);


// #43
// const sortByDescendingFriendCount = users.flatMap(user => user.friends).sort((firstFriend, seconFriend) => {
//         return seconFriend.localeCompare(firstFriend);
//  });
//  console.table(sortByDescendingFriendCount);

//  const sortByDescendingFriendCount = users
 
//  .flatMap(user => user.friends)
//  .filter((friend, index, array) => array.indexOf(friend) === index)
//  .sort((firstFriend, seconFriend) => {
//     return seconFriend.localeCompare(firstFriend);
// });
// console.table(sortByDescendingFriendCount);

// // # 44
// const sortByName = users => {
//     return [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));
    
//     };
//     console.log(sortByName);

// // # 45
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;
//   // Change code below this line
  
//   const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));
 
//   console.log(names);

//# 46 
 [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male"
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female"
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
      isActive: true,
      balance: 3951,
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
      isActive: false,
      balance: 1498,
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female"
    }
  ]
  

// const getNamesSortedByFriendCount = users => {
//     return [...users]
//     .sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
//     .map((user) => user.name);
// };

// console.table(getNamesSortedByFriendCount);

//# 47

// const getSortedFriends = users => {
//     return users
//    .flatMap(user => user.friends)
   
//    .filter((friend, index, array) => array.indexOf(friend) === index)
//   .sort((a, b) => a.localeCompare(b))
//   };
//   console.log(getSortedFriends);

// const getTotalBalanceByGender = (users, gender) => {
// return [...users].filter(user => user.gender === gender)
// .reduce((acc, user) => acc += user.balance, 0)
// };
 
// const bookShelf = {
//     authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//     getAuthors() {
//       return this.authors;
//     },
//     addAuthor(authorName) {
//       this.authors.push(authorName);
//     },
//   };
  
//   console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
//   bookShelf.addAuthor("Лі Таніт");
//   console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]

// const petya = {
//     username: "Petya",
//     showThis() {
//       console.log(this);
//     },
//     showName() {
//       console.log(this.username);
//     },
//   };
  
//   petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
//   petya.showName(); // 'Petya'



// const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
  
//   function makeMessage(callback) {
//     // callback() - це виклик методу getFullName без об'єкта
//     console.log(`Обробляємо заявку від ${callback()}.`);
//   }
  
//   makeMessage(customer.getFullName); // Буде помилка у виклику функції



// const hotel = {
//     username: "Resort hotel",
//     showThis() {
//       const foo = () => {
//         // Стрілки запам'ятовують контекст під час оголошення
//         // з батьківської області видимості
//         console.log("this in foo: ", this);
//       };
  
//       foo();
//       console.log("this in showThis: ", this);
//     },
//   };
  
//   hotel.showThis();
//   // this in foo: {username: 'Resort hotel', showThis: ƒ}
//   // this in showThis: {username: 'Resort hotel',showThis: ƒ}


//4 (5 mod)

// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
//   };
//   // Change code below this line
  
//   const child = Object.create(parent);
  
//   // Change code above this line
//   child.name = "Jason";
//   child.age = 27;

//   console.log(parent.hasOwnProperty("surname"));
//   console.log(parent.hasOwnProperty("heritage"));
//   console.log(child.hasOwnProperty("name"));
//   console.log(child.name); 
//   console.log(child.hasOwnProperty("age"));
//   console.log(child.hasOwnProperty("surname"));
//   console.log(child.hasOwnProperty("heritage"));
//   console.log(parent.isPrototypeOf(child));



// class Car {
//     // Change code below this line
//   #brand;
//   model;
//   price;

//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//   getBrand() {
//     return this.#brand;
//   }
//     changeBrand(newBrand) {
//      this.#brand = newBrand;
//     }
//     // Change code above this line
//   }

//   console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
//   console.log(new Car({ brand: "bmw", model: "X5", price: 58900 }));
//   console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));
// //   console.log(getBrand);
//   console.log(changeBrand("Honda"));
