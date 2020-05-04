'use strict';
let arrQ = [];
let arrA = [];
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
for (let i = 0; i <2; i++) {
   arrQ[i] = prompt("Введите обязательную статью расходов в этом месяце");
   arrA[i] = prompt("Во сколько обойдется?");
 }
 let appData={
    money:money,
    timeData:time,
    expenses:{
    },
    optionalExpenses:{
    },
    income:[],
    savings:false
};

for (let i = 0; i < 2; i++) {
  appData.expenses[arrQ[i]] = arrA[i];
}
console.log(appData.expenses);
alert("Ваш бюджет на один день " + appData.money/30 + " рублей");
