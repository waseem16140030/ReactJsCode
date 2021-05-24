/************************************** Arithmetic operators ********************************************* */
let x=10;
let y=20;
console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x%y);
// console.log(x**y);

//increment operator

console.log(x++);
console.log(++x);
/************************************** Arithmetic operators ends ********************************************* */


/************************************** Assignment Operators ********************************************* */
let z=40;
z++;
console.log(z)
z=z+1;
console.log(z);
z+=5;
console.log(z);

/************************************** Assignment Operators Ends ********************************************* */



/************************************** Comparasion Operators ********************************************* */

console.log(x>0);
console.log(x<1);
console.log(x<=1);
//loose equality operator (returns true when value matches)
console.log(x==1);
//Strict equality operator (returns true if both type and value matches);
console.log("strict equality operator")
console.log(12==='12');
/************************************** Comparasion Operators Ends ********************************************* */


/************************************** Ternary Operator ********************************************* */
//if customer has more than 100 points
//they are Gold
//tery are silver

let points=10;
let type=points>100 ? 'gold': 'silver';
console.log(type);
/************************************** Ternary Operator Ends ********************************************* */



/************************************** Logical Operators ********************************************* */
//logical AND (&&)
//returns true when both operands are true
console.log(true && true);
console.log(true && false);

//Logical OR (returns ture if one of the operands is true)
console.log("logical OR operator");
console.log(true || false);

//NOT operator (!)
console.log("Not Operator");
console.log(!true);


//Logical operators with non-boolean values
//jsFalsy
// undefined
//null
//0
//NAN
//''

console.log(false || 1 || 2);

//Anything which is not falcy->trucy

/************************************** Logical Operator Ends ********************************************* */
let result= 3+5*6;
console.log(result);
result=(3+5)*6;
console.log(result);

/************************************** Operator Precedense ********************************************* */





/**************************************Exercise Swap values********************************************* */
let a='red';
let b='blue';
let c= null;
console.log("before swapping:"+ "a= "+ a + " b =" + b);
c=a;
a=b;
b=c;
console.log("after swapping:"+ "a= "+ a + " b =" + b);
/**************************************Exercise Swap values Ends********************************************* */
