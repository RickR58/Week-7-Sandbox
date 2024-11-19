//let and const are other ways to name a variable formerly...
var x = 10;
{
  let x = 2;
}
//expceted is 10. the let name is ignored bc of let.
var x = 10;
{
  x = 2;
}
//expceted is 2, i guess because the let feature is gone.
var x = 10;
{
  var x = 2;
}
//expceted is 2, bc the second one changed the first

//if we use CONST, the variables cant change
/*
const pi = 3.1789;
console.log(pi);

pi = 6; //but this is saying pi is osmething different
console.log(pi); // this log prints and error
*/

//Template Literals (see Romaric's git). This next method allows us to stack text without using \n for line breaks.
let myString = `Hola
mundo,
mi llamo
Rick.`;
console.log(myString);

let anotherString = "Hello\nworld\nmy name\nis Rick."; //this was the olde way to make the text stack (or add returns)
console.log(anotherString);

//Here's another example of a template (?) literal.
console.log(`Six times five = ${5 * 6}`); //we can wrap any js code in curly braces and adding a dollar sign.

//mas...Template literals are literals delimited with backtick (`) characters.  They are really useful, and allow multi-line strings, string interpolation with embedded expressions, and tagged templates.
let firstName = "Rickey";
let lastName = "Rat";
let street = "1 Main St.";
let city = "Disneyland";
let state = "CA";

console.log(
  `${firstName} ${lastName} lives at 
${street} 
                 ${city}, ${state}.`
);
//In JavaScript, this information could be printed using console.log() and string concatenation, but using console.log() and template literals provides a much easier way to do so.

//Arrow FUnctions aka Fat Arrows =>
