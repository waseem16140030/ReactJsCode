/**  JS variables start  */

let Name;
console.log("A variable wich is not intialized yet have value =" + Name);
Name="Waseem";
console.log("Value of variable is=" + Name + "and type is = " + typeof(Name));

/**  JS variables end */



/****************************** Constants  ***************************/
const intrestRate=0.3;
//intrestRate=0.4; this would create an error because cosnt can't be changed throught the code
/******************************End Constants  ***************************/


/******************************  Primitive Or Value Types *************************** */
let firstName="Muhammad"; //String literal
console.log("Value of variable = "+ firstName + ' ' + "and type is=" + typeof(firstName));
let age=25; //Number literal
console.log("Value of variable = "+ age + ' ' + "and type is=" + typeof(age));
let flag=true; //Boolean
console.log("Value of variable = "+ flag + ' ' + "and type is=" + typeof(flag));
let lastName=undefined; //bydefault its value is undefined
console.log("Value of variable = "+ lastName + ' ' + "and type is=" + typeof(lastName));
let selectedColor=null //null literal
console.log("Value of variable = "+ selectedColor + ' ' + "and type is=" + typeof(selectedColor));
/******************************  Primitive Or Value Types ends *************************** */



/************************************** Dynamic Types  ********************************** */
let person={
 name:"Waseem",
 age:30

};
console.log(person);
console.log("Name of person= " + person.name + ' '+ "and age of person is = " + person.age);
person.name='jhon';
console.log(person.name);

/************************************** Dynamic Types Ends  ********************************** */
let selectedColors=['red','blue','green'];
selectedColors[3]= 'black';
console.log(selectedColors);
console.log (typeof(selectedColors));
console.log(selectedColors.length);

/************************************** Arrays (List of objects) ********************************** */


/************************************** Functions ************************************************* */
function greet( name, age){
    console.log(name, 34);
}
greet("Hello" + ' ' +'waseeem jhon');
/************************************** Functions end ************************************************* */


/************************************** Type of functions (Calcualtes a value or returns something) ************************************************* */


function square(num){
    return num*num;
}
console.log(square(4));

/**************************************Type of Functions end ************************************************* */