var string1 = "Javascript is the second important language"
var string2 = " in the technology world."

//Get the index of any character inside a string
console.log(string1.charAt(0)); // index 0 = J


//return the unicode character of v:
console.log(string2.charCodeAt(2));  // 32

//adding two strings  to each ither :
console.log(string1.concat(string2));

//check if the string endwith spesific characters:
console.log(string1.endsWith("language"));  //true
//console.log(string1.endsWith("World."));  false

console.log(string2.endsWith("."));  //true


//check if string include contain spesific characters:
console.log(string1.includes("important"));

//indexOf & lastIndexOf methods :
console.log(string1.indexOf("second")); //18
console.log(string2.lastIndexOf("the")); //4

