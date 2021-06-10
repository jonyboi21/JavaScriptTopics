const stringPrimitive = "This is a new String";

const stringObject = new String("This is the String object");

console.log(typeof stringPrimitive);
console.log(typeof stringObject);


//how we index strings

console.log("Where are we going".charAt(4));


//indexOf will return only the first instance of the letter
console.log("JavaScript is similar to Java".indexOf("J"));

console.log("JavaScript is a scripted version of Java".slice(10,15))


console.log("we use .length to find the length of a String".length)

console.log("We use toUpperCase to convert a string to uppercase".toUpperCase());

console.log("We use split() to split the characters in between the given parameter and it will store it into an array".split(" "))

console.log("  Trim will remove white spaces from both ends of a string but no tinbetweek      ".trim())

console.log("")