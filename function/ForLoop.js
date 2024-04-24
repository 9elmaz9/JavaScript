for(  var z=0;z <= 6; z++){  

    var x= Math.random();
    var y=Math.random();
    
    x = x * 6;
    y = y * 6;
    
    x = Math.floor(x);
    y = Math.floor(y);

    if (x >= 4){
        if(y >= 3){
            console.log(x,y);
            console.log("You win!");
        }
    }else {
        console.log(x,y);
        console.log("You lose!");
    }
}
    




/*Этот цикл for должен проигрываться 7 раз,
так как он запускается с z = 0 и продолжается до тех пор,
пока z не станет больше 6 (z <= 6). Каждый раз,
когда цикл выполняется, переменные x и y генерируются
с помощью Math.random(), затем они умножаются на 6 и
округляются вниз с помощью Math.floor(). 
Затем проверяется условие, и в зависимости от
результатов выводится сообщение "You win!" или "You lose!"*/



//for(var x = 0; x <=3 ; x++){  // runs unti become 3
 //   console.log(x);
//}