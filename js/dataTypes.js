 /*
    +
    -
    *
    /
    %
    infinity
    -infinity
    Nan
    */

/* console.log(-8 / 0); // - infinity  */

/*console.log("Good Morning"/5) // Nan   */

var x = 5;
var y = 10;
var z;
/*console.log(x > y); //false*/
console.log(z);  //undefined same as console.log(typeof(z));


//null datatype
var x1 = 5;
var y1 = 10;
var z1=null; 
console.log(z) // null


//object data type

var colors = { 1:"red", 2:"yellow",3:"green"}   // example  var colors = { key:value,key:value}
console.log(typeof (colors)); //object

console.log(colors);  //{ '1': 'red', '2': 'yellow', '3': 'green' }



 //array data type

var colors = [ "red", "yellow","green",1,2,3]   // example  var colors = { key:value,key:value}

console.log(colors);  //[ 'red', 'yellow', 'green', 1, 2, 3 ]   - 0 1 2 3 4 5  ( index  5 is 3)

console.log(colors[0], colors[5]);  //red 3


 //function

function colorss (){
    console.log("red", "yellow", "green", 1, 2, 3);
};
//then call the function
var color = colorss(); 
console.log(color);
colorss(); //red yellow green 1 2 3









