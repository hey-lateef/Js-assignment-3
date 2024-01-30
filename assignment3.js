// Q1 Solution

const orderList = [{name:"Laptop", price: 12000},{name:"mobile", price:7000},{name:"Mobile Charger",price:1500},{name:"Laptop Charger", price:10500}];

let sum = 0;
orderList.forEach((data)=>{
    sum = sum+data.price
    return sum
    
});
 console.log(`The Total Price is Rs.${sum}`);

 //Q2 Solution

function randomGenerator (){
   const randomNumber = Math.floor(Math.random()*100);
   console.log(randomNumber);
}

function printWithInterval(){
    randomGenerator();
    setInterval(randomGenerator,2000)
}

printWithInterval();

//Q3 Solution

let expenses = [{amount:100, catagory:"Utilities"},{amount:200,catagory:"Groceries"},{amount:50, catagory:"Entertainment"}];

let expensesWithTax = expenses.map((expense)=>{
    let tax = expense.amount * 0.1;
    return {...expense, tax : tax};
});

console.log("Expenses With Tax", expensesWithTax);

//Q4 Solution

let expenses1 = [{amount:100, catagory:"Utilities"},{amount:200,catagory:"Groceries"},{amount:50, catagory:"Entertainment"}];
let groceryExpense = expenses1.filter((expense)=>{
    return expense.catagory === "Groceries"
});

console.log("Groceries Expenses:", groceryExpense);


//Q5 Solution
let expense2  = [{amount:100, catagory:"Utilities"},{amount:200,catagory:"Groceries"},{amount:50, catagory:"Entertainment"}];
let totalExpences = expense2.reduce((pre,curr)=>{
    return  pre + curr.amount
},0)

console.log("Total Expenses", totalExpences);

//Q6 Solution
let expenses3 =
[{ amount: 100, category: "Utilities" }, { amount: 200, category: "Groceries" }, { amount: 50, category: "Entertainment" }]
function categorizeExpense(expense) {
if (expense.amount > 100) {
return "High Expense";
}
else {
return "Low Expense";
}
}
let categorizedExpenses = expenses3.map((expense)=>categorizeExpense(expense))

console.log("Categorized Expenses:", categorizedExpenses);


//Q7 Solution
let =originalNumber = [2,5,8,10,3];

originalNumber.forEach((number,index,array)=>{
    array[index]= number*2;
});
console.log("The Double Numbers are" ,originalNumber);

//Q8 Solution

let originalNumber1 = [2,5,8,10,3];
let evenNumber = [];
originalNumber1.forEach((number)=>{
    if (number % 2 === 0){
        evenNumber.push(number);
    
}
})

console.log("Even numbers in the list : ",evenNumber);