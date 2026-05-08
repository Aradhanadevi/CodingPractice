//Tody I learned about template literals and string interpolation.

/*template literals are a new feature in js that allows us to create
strings in a more convenient way.They are enclosed by backticks(`) instead of single or
double quotes. They also allow us to use string interpolation, which is a way to 
embed expressions inside a string.*/

let name = "Aradhana";
let age = 20;

console.log(`Hello, my name is $(name) and I am $(age) years old.`); //This is string interpolation, it will replace the variables with their values and output the result in a string.

/*We can create a template literil of multiple lines 
without using \n andwe would not have to use +, in this we can use "  and '*/

console.log(`I am going to pretend that I am writing 
    something important. See here you can use "double quotes" and
    'single quotes' without any problem. Also this will print this statemet as it is 
    without using backslash n and +. 
    `)


