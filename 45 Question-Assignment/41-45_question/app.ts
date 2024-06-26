// Question - 41 Magicians: Make a array of magician’s names.Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


let magicians: string[] = ["harry", "potter", "misbah", "kinza"]
function
    show_magicians(magicians: string[]) {
    magicians.forEach(element => {
        console.log(element);
    });
}

show_magicians( magicians)

// Question-42 Great Magicians: Start with a copy of your 
// program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians: string[] = ["harry", "potter", "misbah", "kinza"]

function Make_great (magicianArray: string[]){
    for(let i=0 ; i<magicianArray.length; i++){
        magician[i ] = "the graet" +  magicianArray[i]
    }
}

function
    show_magicians(magicians: string[]) {
    magicians.forEach(element => {
        console.log(element);
    });
}



// Question-43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician: string[] = ["harry", "potter", "misbah", "kinza"]

function copyArray(arr: string){
    return [...arr]
}

function Make_great (magicianArray: string[]){
    for(let i=0 ; i<magicianArray.length; i++){
        magicianArray[i] = "the graet" +  magicianArray[i]
    }
}

function
    show_magicians(magicians: string[]) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray  = copyArray(magician)
Make_great(copyMagicianArray)

console.log("this is my origanl array ")
show_magicians( magician)


console.log("this is my modified copy of the array ")
show_magicians( copyMagicianArray)


// Qestion-44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function  MakeSandwich  ( item : string[]){
    item.forEach(element => console.log("-" + element))
 console.log("Enjoy your sandwich! \n")
}

MakeSandwich (["ham", " cheese",  "lettuce"])
MakeSandwich (["turkey", " bacon"])
MakeSandwich (["peanut", " butter",  ])

// question- Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function storeCarInfo (manufacturer : string, modelName: string, ....extraOption: {[key :string] : any } []):
object{

    const carInfo = {manufacturer,
         modelName,
        ...Object.assign({...extraOption})
    }

    return carInfo
}
storeCarInfo("honda", "Civic", {color: "black"}, {feature :["navigation", "power windo"]})