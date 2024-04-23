var num1 = 2;
var num2 = 1.2;
var num3 = 6;
var num4 = 7;

/*num1 ++;
num2--;
3
0.19999999999999996*/


/* console.log(num1+num2)*/
/* console.log(num1-num2)*/
/* console.log(num1*num2)*/
/* console.log(num1/num2)*/

/* num1 = num1 + 1;
num2 = num2 - 1;
console.log(num1,num2) */

/*num1--;
num2++;
console.log(num1);
console.log(num2);*/


num3 -= 2;
num4 += 3;
/*console.log(num4 % 2);*/
console.log(num3);
console.log(num4);


//Toewijzingsoperators 
var a = 1;
var b = a;
b = 2;
console.log(a); 
console.log(b); 

//Rekenkundige 
var a1 = 1;
var b2 = 2;
var c3 = a1 + b2;
console.log(c3); 

//Tekenreeksoperators 
var aA = "1";
var bB = "2";
var cC = aA + bB;
console.log(cC); // 12

//Relational 
var av = 1;
var bv = 2;
var cv = av > bv;
console.log(cv); // false


//Vergelijkingsoperators 
var as = 1;
var bs = 2;
var cs = as == bs;
console.log(cs); // false


//Logische 

var ar = 1;
var br = 2;
var cr = ar == br;
var dr = ar != br;
console.log(cr); // false
console.log(dr); // true


//Typeof operator

var at = 1;
var bt = "2";
var ct = at == bt;
console.log(typeof at); // number
console.log(typeof bt); // string
console.log(typeof ct); // boolean