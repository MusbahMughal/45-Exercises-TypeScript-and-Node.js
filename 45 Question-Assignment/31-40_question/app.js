// Question-31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
var users = ["misbah", "kinza", "kainat", "komal", "haniya"];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === "admin") {
            console.log("Hello admin, Would you like to see a status report");
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again"));
        }
    }
}
// Question -32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
var current_users = ["misbah", "kinza", "kainat", "komal", "haniya"];
var new_users = ["ramsha", "liza", "minsa", "komal", "haniya"];
new_users.forEach(function (newusername) {
    var lowerCase = newusername.toLowerCase();
    if (current_users.map(function (c_user) { return c_user.toLowerCase().includes(lowerCase); })) {
        console.log("thw username ".concat(newusername, " is not available . Please take other name"));
    }
    else {
        console.log("the username ".concat(newusername, "is available"));
    }
});
// Question -33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _a = 0, number_1 = number; _a < number_1.length; _a++) {
    var num = number_1[_a];
    var ordinalEnding = void 0;
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(num).concat(ordinalEnding));
}
// Question -34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var Pizzas = ["pepperoni ", "BBA Chicken", "Cuban "];
for (var _b = 0, Pizzas_1 = Pizzas; _b < Pizzas_1.length; _b++) {
    var Pizza = Pizzas_1[_b];
    console.log("I like ".concat(Pizza, " pizza"));
}
console.log("I reallty like pizza!");
// Question 35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var Animals = ["dog", "cat", " rabbit "];
for (var _c = 0, Animals_1 = Animals; _c < Animals_1.length; _c++) {
    var animal = Animals_1[_c];
    console.log("A ".concat(animal, " would  make a great pet "));
}
console.log(" Any of these  animal would make a great pet ");
// // Question -36T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function makeShirt(size, text) {
    console.log("Creating a ".concat(size, " shirt with the message: ").concat(text));
}
makeShirt("large", "Misbah");
// Question-37 Large Shirts:
function makeShirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the message: ").concat(text));
}
makeShirt(); // Default: large, "I love TypeScript"
makeShirt("medium"); // Medium, "I love TypeScript"
makeShirt("small", "I love Node.js"); // Small, "I love Node.js"
// Question-38 Cities:
function describeCity(city, country) {
    if (country === void 0) { country = "default Country"; }
    console.log("".concat(city, " is in ").concat(country));
}
describeCity("Karachi", "Pakistan");
describeCity("Lahore", "Canada"); // Corrected city name
// Question-39 City Names:
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
var karachiPakistan = cityCountry("Karachi", "Pakistan");
var tokyoJapan = cityCountry("Tokyo", "Japan");
var parisFrance = cityCountry("Paris", "France");
console.log(karachiPakistan);
console.log(tokyoJapan);
console.log(parisFrance);
// Question-40 Album:
function makeAlbum(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = makeAlbum("Artist 1", "Album Title 1!", 12);
console.log(album1);
var album2 = makeAlbum("Artist 2", "Album Title 2!");
console.log(album2);
var album3 = makeAlbum("Artist 3", "Album Title 3!");
console.log(album3);
