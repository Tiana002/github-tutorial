// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   // Деструктуризуємо
//   const { title, author, isPublic, rating, coverImage } = book;
//   console.log(coverImage); // undefined
  
//   const accessType = isPublic ? "публічному" : "закритому";
//   const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;

//   console.log(message);

// doStuffWithBook({
//     title: "The Last Kingdom",
//     numberOfPages: 736,
//     downloads: 10283,
//     rating: 8.38,
//     isPublic: true,
//   });

// function doStuffWithBook({
//     title,
//     numberOfPages,
//     downloads,
//     rating,
//     isPublic,
//   }) {
//     console.log(title);
//     console.log(numberOfPages);
//     // І так далі
//   }

//   // Колбек-функція
// function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
//   }
  
//   // Функція вищого порядку
//   function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
//   }
  
//   registerGuest("Манго", greet);

  function registerGuest(name, callback) {
    console.log(`Реєструємо гостя ${name}.`);
    callback(name);
  }
  
  // Передаємо інлайн функцію greet у якості колбека
  registerGuest("Манго", function greet(name) {
    console.log(`Ласкаво просимо ${name}.`);
  });
  
  // Передаємо інлайн функцію notify у якості колбека
  registerGuest("Полі", function notify(name) {
    console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
  });

  const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Індекс ${i}, значення ${numbers[i]}`);
}

// Метод перебирання forEach
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});