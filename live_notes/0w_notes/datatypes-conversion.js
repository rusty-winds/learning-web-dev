"use strict"; //inclusion of this line tells compiler to treat all JS code as newer version
// Types of data types (primitive)number => 2 to power 53 maximum number before need for bigint
// bigint string "" boolean => true false , null => standalone value , undefined => 
// symbol => unique used for react
// object
console.log(typeof undefined); // answer is undefined
console.log(typeof null); // answer is object null is object and undefined is the value and the datatype
//conversions
let score = "33" 
console.log(typeof score);//answer is string
let valueInNumber = Number(score)
console.log(typeof valueInNumber);//this will return number but
//	if score was boolean it will return 1 or 0
//	if score was string it will still return number and logging valueInNumber returns Nan(not a number)
//	null returns after conversion 0 & types of all these will be number but the value is changed as written
//	1 and any value when converted to boolean gives true and 0 and empty string gives false
//---------------------operations----------------------------------------------
let value = 3 
let negValue = -value
//console.log(negValue);
let str1 = "hitesh"
let str2 = "hitesh"
let str3 = str2 + str1
console.log(str3);// if you try add a string and number then if the str is first both will be appended as string otherwise the 2+2+"3"=43
// to study this behaviour further refer to js official documentation about operator precedence although not very usable for production code
//
