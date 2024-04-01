var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question -11 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var greet = ["misbah", "kinza", "komal"];
var text = " would you love to learn typescript";
console.log(greet[0] + text);
console.log(greet[1] + text);
console.log(greet[2] + text);
// Question-12 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ["Honda Motercycle", "Honda City", "Honda Civics"];
transportation.map(function (item) { return console.log("I would Like to own ", item); });
// Question-13 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let guestArray : string []= ["haniya", "arfa", "safiullah"
// guestArray.map((Guest)=>console.log(`Hello friends, ${Guest} you are invited to dinner `))
// Question-14 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestArray = ["misbah", "kinza", "komal"];
guestArray.map(function (Guest) { return console.log("Hello friends, ".concat(Guest, " you are invited to dinner ")); });
var canNotAttend = "kinza";
console.log("".concat(canNotAttend, " can not make it , for dinner"));
var newGuest = "haniya ";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
// console.log(guestArray)
// guestArray.map((Guest)=>console.log(`Hello  ${Guest} you are invited to dinner `))
// Question -15 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
console.log("welcome all we found a bigger table");
guestArray.unshift("abdullah");
console.log(guestArray);
var middleGuest = "umair";
var middleindex = guestArray.length / 2;
guestArray.splice(middleindex, 0, middleGuest);
console.log(guestArray);
guestArray.push("kulsoom");
console.log(guestArray);
guestArray.map(function (item) { return console.log("Dear ".concat(item, " you are invited for finner ")); });
// 16-Question Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
var guestArray = ["misbah", "kinza", "komal"];
var canNotAttend = "kinza";
var newGuest = "hazel";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
guestArray.unshift("abdullah");
var middleGuest = "umair";
var middleIndex = Math.floor(guestArray.length / 2); // Use Math.floor to get integer index
guestArray.splice(middleIndex, 0, middleGuest);
guestArray.push("khani");
console.log(guestArray);
console.log("we can invite only two people!");
while (guestArray.length > 2) {
    var removeGuest = guestArray.pop();
    console.log("Sorry ".concat(removeGuest, " we can't invite to dinner"));
}
guestArray.forEach(function (item) { return console.log("".concat(item, " you are still invited to dinner")); });
guestArray.pop();
guestArray.pop();
console.log(guestArray);
// Question-17 Seeing the World: Think of at least five places in the world you’d like to visit.
var placesToVisit = ["Hong Kong", "Canada", "Pakistan", "Iran", "Brazil"];
console.log(placesToVisit);
// Print your array in alphabetical order without modifying the actual list.
console.log(__spreadArray([], placesToVisit, true).sort());
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log(placesToVisit);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log(__spreadArray([], placesToVisit, true).reverse());
console.log(__spreadArray([], placesToVisit, true).reverse());
var sortArray = ["Hong Kong", "Canada", "Pakistan", "Iran", "Brazil"];
console.log(sortArray.sort());
console.log(sortArray.sort().reverse());
// Question-19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestsInvited = ["misbah", "komal", "kinza"];
guestsInvited.forEach(function (item) { return console.log("Hello, ".concat(item, " you are invited to dinner")); });
console.log("".concat(guestsInvited.length, " people are invited to dinner"));
// Question-20 Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var countries = ["London", "Pakistan", "Canada", "Japan"];
console.log("List of countries that I would visit:");
countries.forEach(function (item) { return console.log(item); });
