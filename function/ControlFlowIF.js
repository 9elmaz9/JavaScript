var x= Math.random();
var y= Math.random();

x=x*6;
y=y*6;


x=Math.floor(x);    // используется для округления числа до ближайшего меньшего целого числа. Она возвращает наибольшее целое число, которое меньше или равно данному числу.
y=Math.floor(y);
console.log(x); 
console.log(y); 


//Math.floor(5.7); // Возвращает 5
//Math.floor(1.3); // Возвращает 1
//Math.floor(-2.8); // Возвращает -3


if(x>=4){
    if(y>=3){
    console.log("You win!");
    }
}else{
    console.log("You lose!");
}