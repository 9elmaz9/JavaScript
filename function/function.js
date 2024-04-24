function makeCoffe(cups) {

    var cost = cups * 2
    
    console.log("Tame the ingredients!");
    console.log("Start Making coffee!");
    console.log("Pour the coffee drink into the mugs!" + " " + cups + " " + "times");
    console.log("The cost of your order=" + " " + cost);
}

//   makeCoffe(5);  //we use number of cups -  5 cups


//reminder function 
function remainder(money) {
    var numOfMugs = Math.floor(money / 2)
    var remainderAfterPurchase=money%2
    //   return money %2   - first version
    // return numOfMugs, remainderAfterPurchase
    console.log(numOfMugs)
    return remainderAfterPurchase
}

remainder(25)
