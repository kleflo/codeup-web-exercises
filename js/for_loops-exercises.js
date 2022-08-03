//2.
function showMultiplicationTable (num){
   for (var i = 1; i <= 10; i++){
       console.log(num + "x" + i + " = " + (num * i))
   }
}
showMultiplicationTable(10);
/* Q2-> console.log cannot be accepted + (var i = 1; i <= 10; i++) [shows 1 - 10]
.toString behind anything that you want to be a string [num,i] basically to match totally. */
/* Q: What goes inside of a for()
*  Q: What goes inside of the console.log() in this exercise, why? */

//3.
    for (let i = 1; i <= 10; i++) {
    var random = Math.floor(Math.random() * 180) + 20;
         if (random % 2 === 0) {
            console.log(`${random} is even`);
    }   else if (random % 2 !== 0) {
             console.log(random + " is odd");
    }
}
/* (randomNumber % 2 === 0) ? console.log(randomNumber + " is even") : console.log(randomNumber + " is odd")
*-> this a another way of executing the arguement.
* Q3-> Math.floor(Math.Random())- generates random numbers.
*-> +20 is making sure we don't go over 20?
*-> template literal -> `${value or number or string} + ...`
*-> in an if/else statement , statements without an else will still run okay.
 */

//4.
for(var i = 1; i <= 9; i++){
    console.log(i.toString().repeat(i));
}
/*
-> work on/look over increments!!
-> console.log(i.toString().repeat(i)) is another way of writing this argument.
 */

//5.
for(var i = 100; i >= 5; i -= 5){
    console.log(i)
}