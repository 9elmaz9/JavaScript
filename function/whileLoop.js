//again again again 

var z=0;

while (z <= 3){  // play 3 time     / while (z <= 3){  srazy igraet vse 3 
   // it wa example console.log();  // 0 1 2 3
   // ++;
var x= Math.random();
var y=Math.random();

x = x * 6;
y = y * 6;

x = Math.floor(x);
y = Math.floor(y);



if (x >= 4){
    if(y >= 3){
        console.log(x);
        console.log(y);
        console.log("You win!");
    }
}else {
    console.log(x);
    console.log(y)
    console.log("You lose!");
}
  z++;
}