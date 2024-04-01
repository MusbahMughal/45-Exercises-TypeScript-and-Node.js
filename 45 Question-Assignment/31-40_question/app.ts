// Question-31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.


let users: string[] = ["misbah", "kinza", "kainat", "komal", "haniya"];

if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let user of users) {
        if (user === "admin") {
            console.log("Hello admin, Would you like to see a status report");
        } else {
            console.log(`Hello ${user}, thank you for logging in again`);
        }
    }
}

// Question -32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

let  current_users: string[] = ["misbah", "kinza", "kainat", "komal", "haniya"];
let  new_users : string[] = ["ramsha", "liza", "minsa", "komal", "haniya"];


new_users.forEach(newusername =>{
    let lowerCase : string = newusername.toLowerCase()
if (current_users.map(c_user => c_user.toLowerCase().includes(lowerCase)) ){
    console.log(`thw username ${newusername} is not available . Please take other name`)
}else {
    console.log(`the username ${newusername}is available`)
}
} )

// Question -33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
let number: Number [] =[1,2,3,4,5,6,7,8,9] 
for (let num of number){
    let ordinalEnding:string;

    if(num === 1){
        ordinalEnding = "st";
    }else if(num === 2){
        ordinalEnding = "nd"
    }else if(num === 3){
        ordinalEnding = "rd"
    }else {
        ordinalEnding = "th"
    }
    console.log(`${num}${ordinalEnding}`)
}

// Question -34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let Pizzas : string [] =["pepperoni " ,"BBA Chicken", "Cuban "]

for (let Pizza of Pizzas ){
    console.log(`I like ${Pizza} pizza`)
}
console.log(`I reallty like pizza!`)

// Question 35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let Animals: string []= ["dog", "cat", " rabbit "]

for(let animal of Animals){
    console.log(`A ${animal} would  make a great pet ` )
}

console.log(" Any of these  animal would make a great pet ")

// // Question -36T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.



function makeShirt(size: string, text: string): void {
    console.log(`Creating a ${size} shirt with the message: ${text}`);
  }
  
  makeShirt("large", "Misbah");
  
  // Question-37 Large Shirts:
  
  function makeShirt(size: string = "large", text: string = "I love TypeScript"): void {
    console.log(`Creating a ${size} shirt with the message: ${text}`);
  }
  
  makeShirt(); // Default: large, "I love TypeScript"
  makeShirt("medium"); // Medium, "I love TypeScript"
  makeShirt("small", "I love Node.js"); // Small, "I love Node.js"
  
  // Question-38 Cities:
  
  function describeCity(city: string, country: string = "default Country"): void {
    console.log(`${city} is in ${country}`);
  }
  
  describeCity("Karachi", "Pakistan");
  describeCity("Lahore", "Canada"); // Corrected city name
  
  // Question-39 City Names:
  
  function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  const karachiPakistan = cityCountry("Karachi", "Pakistan");
  const tokyoJapan = cityCountry("Tokyo", "Japan");
  const parisFrance = cityCountry("Paris", "France");
  
  console.log(karachiPakistan);
  console.log(tokyoJapan);
  console.log(parisFrance);
  
  // Question-40 Album:
  
  function makeAlbum(artist: string, title: string, tracks?: number): object {
    const album = { artist, title };
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
    return album;
  }
  
  const album1 = makeAlbum("Artist 1", "Album Title 1!", 12);
  console.log(album1);
  
  const album2 = makeAlbum("Artist 2", "Album Title 2!");
  console.log(album2);
  
  const album3 = makeAlbum("Artist 3", "Album Title 3!");
  console.log(album3);
  