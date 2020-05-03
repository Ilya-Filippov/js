'use strict';
var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");
var questionFirst = prompt("Введите обязательную статью расходов в этом месяце");
var questionSecond = prompt("Во сколько обойдется?");
var appData={
    money:money,
    timeData:time,
    expenses:{

    },
    optionalExpenses:{

    },
    income:[],
    savings:false
};

appData.expenses.questionFirst = questionSecond;
console.log(appData.expenses);



