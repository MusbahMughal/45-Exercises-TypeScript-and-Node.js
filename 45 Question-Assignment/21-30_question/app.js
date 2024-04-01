// Question-21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Create objects containing different items
var item1 = {
    name: "Laptop",
    category: "Electronics",
    price: 999.99,
};
var item2 = {
    name: "Book",
    category: "Education",
    price: 19.99,
};
// Print out the items
console.log("Item 1:", item1);
console.log("Item 2:", item2);
// Question-22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// Define an array
var numbers = [1, 2, 3, 4, 5];
console.log(numbers[10]);
console.log(numbers[2]);
// Question-23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
var car = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");
// Test 2: stsict equality Coomperion [ use for checking  data type ]
console.log("Is car === 'subaru'? I predict True.");
console.log(car === "subaru");
// Test3: inequality comperison (false)
console.log("Is car != 'subaru'? I predict False.");
console.log(car != "subaru");
// Test4: strict  inequality comperison (false)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== "subaru");
// Test5: Less then  comperison (false)
console.log("Is car < 'subaru'? I predict False.");
console.log(car < "subaru");
// Test6: Greater then comperison (false)
console.log("Is car > 'subaru'? I predict False.");
console.log(car > "subaru");
// Test7: less then or equal comperison (true)
console.log("Is car != 'subaru'? I predict False.");
console.log(car != "subaru");
// Test8: greater then or equal  comperison (true)
console.log("Is car != 'subaru'? I predict False.");
console.log(car != "subaru");
// Test9 : Checking truthiness comperison (ture)
console.log("Is car? I predict False.");
console.log(car);
// Test 10: checking falsiness  comperison (false)
console.log("Is car !=  I predict False.");
console.log(car != "subaru");
// Question-24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
var cars = "cultus";
var age = 21;
var Numbers = [1, 2, 3, 4, 5];
// Test 1 : equalty{ true }
console.log("Is car == 'cultus'  I predict True.");
console.log(cars == "cultus");
// Test 2 :strict equalty {false  }
console.log("Is car === 'cultus'  I predict True.");
console.log(cars === "cultus");
// Test 3 : Inequalty {True}
console.log("Is car != 'cultus'  I predict True.");
console.log(cars != "cultus");
// Test 4 :strict equalty {false  }
console.log("Is car !== 'cultus'  I predict false.");
console.log(cars !== "cultus");
// • Tests using the lower case function
// Test 5:LowerCase
console.log("Is car.toLowerCase() == 'cultus' I predict true.");
console.log(car.toLocaleLowerCase() == "cultus");
// Test 6:LowerCase
console.log("Is car.toLowerCase() == 'cultus' I predict false.");
console.log(car === car.toLocaleLowerCase());
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Test 7 : equalty {true }
console.log("Is age == 21  I predict True .");
console.log(age == 21);
// Test 8: Inequalty  {False}
console.log("Is age != 21  I predict False .");
console.log(age != 21);
// Test 9 : Greater than   {true }
console.log("Is age > 21  I predict True .");
console.log(age > 21);
// Test 10 : Less than {true }
console.log("Is age < 21  I predict True .");
console.log(age < 21);
// LOGICAL OPERATER
// Test 11 : &( true)
console.log("Is age > 21 || < 30  I predict False .");
// console.log(age > 21 || < 30)
// Array Test 13
console.log("Is 3  Numbers ? I predict True .");
console.log(3 in Numbers);
// Array Test 14
console.log("Is 5 not Numbers ? I predict True .");
console.log(5 in Numbers);
// QUESTION 25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
var alien_coloer = "green ";
if (alien_coloer == " green") {
    console.log(" the player just earned 5 points for shooting the alien.");
}
var Alien = "red";
if (alien_coloer == " green") {
    console.log(" the player just earned 5 points for shooting the alien.");
}
//  question -26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
var alien_color = "red";
if (alien_color === " red") {
    console.log("that the player just earned 5 points for shooting the alien.");
}
else {
    console.log(" the player just earned 10 points ");
}
alien_color = " yellow ";
if (alien_color === " red") {
    console.log("that the player just earned 5 points for shooting the alien.");
}
else {
    console.log(" the player just earned 10 points ");
}
//   Question- 27Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
var alien_colors = "green";
if (alien_colors === "green") {
    console.log(" the player earned 5 points");
}
else if (alien_colors == " yellow") {
    console.log(" the player earned 10 points");
}
else {
    console.log(" the player earned 15 points");
}
// Question -28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
var ages = 18;
if (ages < 2) {
    console.log(" you are baby");
}
else if (ages < 4) {
    console.log(" you are toddler");
}
else if (ages < 13) {
    console.log(" you are teenager");
}
else if (ages < 20) {
    console.log(" you are adult");
}
else if (ages < 65) {
    console.log(" you are elder");
}
else {
    console.log("you are older");
}
// Question -29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
var favorite_fruits = ["Kivi", "orange", "apple", "peach, bananas"];
if (favorite_fruits.includes("apple")) {
    console.log("apple");
}
if (favorite_fruits.includes("Peach")) {
    console.log("you really like bananas");
}
if (favorite_fruits.includes("Orange")) {
    console.log("Orange");
}
if (favorite_fruits.includes("berry")) {
    console.log("you really like bananas");
}
if (favorite_fruits.includes("Kivi")) {
    console.log("Kivi");
}
// Question-30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
var admin = ["misbah", "kinza", "komal", "haniya ", "arfa"];
for (var i = 0; i < admin.length; i++) {
    if (admin[i] === "admin") {
        console.log("hello admain , Would you like to see status report");
    }
    else {
        console.log("hello ".concat(admin[i], " thank you loggin "));
    }
}
