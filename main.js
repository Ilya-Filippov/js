'use strict';
let money, time;
let optional;
function start() {
money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");
while (isNaN(money) || money == "" || money == "null") {
money = +prompt("Ваш бюджет на месяц?");
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
savings:true
};
for (let i = 0; i <2; i++) {
let a = prompt("Введите обязательную статью расходов в этом месяце");
let b = prompt("Во сколько обойдется?");

if ((typeof(a) === 'string') && (typeof(a) != 'null') && (typeof(b) != 'null') && (a != "" ) && (b != "")) {
appData.expenses[a] = b;
write = true;
}else {
i = -1;
}
}

function detectDayBudget() {
appData.moneyPerDay = (appData.money/30).toFixed();
alert("Ваш бюджет на один день " + appData.moneyPerDay + " рублей");
}

function detectLevel() {
if (appData.moneyPerDay < 100) {
console.log("Минимальный уровень достатка");
}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
console.log("Средний уровень достатка");
}else if (appData.moneyPerDay > 2000) {
console.log("Высокий уровень достатка");
}
}

function chackSavings() {
if (appData.savings == true) {
let save = +prompt("Какова сумма накоплений?");
let percent = +prompt("Под какой процент?");
appData.mounthIncome = save/100/12*percent;
alert("Ваш месячный доход от вклада " + appData.mounthIncome + "Рублей")
}
}

function chooseOptExpenses() {
    for(let i = 1; i <= 3; i++){
        optional = prompt("Необязательная статья расходов " + i + "/3");
        if((typeof(optional) === 'string') && (typeof(optional) != 'null')  && (optional != "" )){
            appData.optionalExpenses[i] = optional;
        }else{
            i=-1;
        }
    
    }    
}

console.log(appData.optionalExpenses);

detectDayBudget();
chackSavings();
detectLevel();
chooseOptExpenses();
