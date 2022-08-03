//2.
var num = 1;
while (num <= 65536){
    num *= 2;
    console.log(num);
}

//Do While Exercise
//1.

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
do {
    var soldCones = Math.floor(Math.random() * 5) + 1;
    if (soldCones <= allCones){
        console.log(`${soldCones} cones sold...`)
        allCones -= soldCones
    }else if (soldCones => allCones){
        console.log(`Cannot sell you ${soldCones} cones I only have ${allCones}...`)
    }
    //console.log(allCones)
} while (allCones !== 0);
console.log("Yay! I sold them all!")