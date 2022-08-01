1. var a = 1; var b = a++; var c = ++a;
// a = 1; b = 1; c = 3
// was there supposed to be 9 total answers to this question?
2. var d = "hello"; var e = false;
// d++ = NaN e++ = 0
1B. var perplexed; perplexed + 2
// NaN
1C. var price = 2.7; price.toFixed(2)
// '2.70'
1D. var price = "2.7"; price.toFixed(2);
// undefined
2. isNaN(0)
// false
isNaN(1)
// false
isNaN("")
// true
isNaN("string")
// true
isNaN("0")
// true
isNaN("1")
// true
isNaN("3.145")
// true
isNaN(Number.MAX_VALUE)
// true
isNaN(Infinity)
// // true
isNaN("true")
// // true
isNaN(true)
// // true
isNaN("false")
// // true
isNaN(false)
/* true
 not sure how to use the syntax to illistrate why the isNaN() function is needed.*/
!true
// false
!false
// true
!!true
// true
!!false
// false
!!0
// false
!!-0
// false
!!1
// true
!!-1
// true
!!0.1
// true
!!"hello"
// true
!!""
// false
!!''
// fale
!!"false"
// true
!!"0"
// true
2. var sample = "Hello Codeup";
// 2A. use .length to find the number of charaters in the string
//12
// 2B. try to make the the sample string all lowercase
// used 'sample.toLowerCase' did not change it.
// 2C. update the varible sample via concatenation so that it contains "Hello Codeup Students"
// var sample = "Hello Codeup" + " Students"
// 2D. replace 'students' with 'class'
// var sample = "Hello Codeup" + " Class"
// 2E + 2F. find the index od 'c' using .indexof(). what do you observe?
// sample.indexof(c)  sample.indexof(C)
// 2G.