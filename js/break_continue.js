//2.
do {
    num = prompt('enter number between 1 and 50');
    for(var i = 1; i <= 50; i++){
        if (i % 2 === 1) { //this is checking if it s odd
            console.log(`Here is an odd number: ${i}`)
            continue;
        } else console.log(`yikes! Skipping number: ${num}`)
    }
} while (isNaN(num)|| num % 2 === 0 || num >= 50 || num < 1);

