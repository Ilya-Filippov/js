'use strict';
let money, time;
function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  while (isNaN(money) || money == "" || money == "null") {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();
var write = false;
var appData={
    money:money,
    timeData:time,
    expenses:{
    },
    optionalExpenses:{
    },
    income:[],
    savings:true,
    chooseExpenses: function () {
      for (let i = 0; i <2; i++) {
        let  a = prompt("Введите обязательную статью расходов в этом месяце", "");
        let  b = prompt("Во сколько обойдется?", "");
          if ((typeof(a) === "string") && (typeof(a) != "null") && (typeof(b) != "null") && (a != "" ) && (b != "")) {
            appData.expenses[a] = b;
            write = true;
          }else {
           i = -1;
          }
       }
    },
    detectDayBudget: function () {
      appData.moneyPerDay = (appData.money/30).toFixed();
      alert("Ваш бюджет на один день " + appData.moneyPerDay + " рублей");
    },
    detectLevel:function () {
      if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
      }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
      }else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
      }
    },
    chackSavings:function() {
      if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", "");
        let percent = +prompt("Под какой процент?", "");
        appData.mounthIncome = save/100/12*percent;
        alert("Ваш месячный доход от вклада " + appData.mounthIncome + "Рублей")
      }
    },
    chooseIncome: function () {
      let item = prompt("Что приносит дополнительный доход? (Перечислите через запятую)", "");
      while ((typeof(item) != "string") || (item == "")) {
        item = prompt("Что приносит дополнительный доход? (Перечислите через запятую)", "");
      }
      appData.income = item.split(",");
      appData.income.push(prompt("Может что-то ещё?", ""));
      appData.income.sort();
      appData.income.forEach(function(item, index, array) {
        if ((item != " ") || (item != "")) {
          console.log("Способы доп. заробка: " + item, ++index);
        }
      });
    }
};
for (var key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
}
appData.chooseIncome();
