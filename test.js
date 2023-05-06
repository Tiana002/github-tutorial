// module 1 .2

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
   
//   sum += i;
// }

// console.log(sum);
// const number = 10;
 
// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }

// let balans = 10000;
// const payment = 2000;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем колличество средств доступных на счету.`);

// if (payment <= balans) {
//     balans -= payment;
//     console.log(`Все хорошо снимаем деньги`);
//     console.log(`На счету осталось ${balans} кредитов`);
// } else {
//     console.log(`На счету недостаточно средств для проведения операции!!!`);
// }
// console.log(`Операция завешена`);

// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log(`Бронзовый партнер!! Скидка 2%`);
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//    console.log(`Серебрянный партнер!! Скидка 5%`);
//    discount = 0.05;
// } else if (totalSpent >= 5000) {
//     console.log(`Золотой партнер!! Скидка 10%`);
//    discount = 0.1;
// } else {
//    console.log(`Не партнер. Скидка 0%.`);
// }

// payment -= payment * discount;
// // payment = payment - payment * discount;
// console.log(
//     `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100} %`);

// totalSpent += payment;
// console.log(`Общая сумма потраченного в магазине: ${totalSpent}`);


// const btnAdd = document.querySelector('button[data-add]');
// const btnReset = document.querySelector('button[data-reset]');
// const valueInput = document.querySelector('input[data-value]');
// const outputEL = document.querySelector('.js-output span');

// let total = 0;

// btnAdd.addEventListener('click', function () {
//     console.log('click ups');
//     const value = Number(valueInput.value);
//     console.log(value);

//     total += value;

//     outputEL.textContent = total;
   
//     valueInput.value = '';
// });

// btnReset.addEventListener('click', function () {
//     total = 0;
//     outputEL.textContent = total;
// });