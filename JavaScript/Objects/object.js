const circle= {
    radius:1,
    location:{
        x:1,
        y:2
    },
    visibility:true
};
/***************************************************Factory Function******************************************** */
function createObjects(radius) {
    
    const circle= {
        radius:radius
    };
    return circle;
}
console.log(createObjects(1));

/***************************************************Factory Function ends******************************************** */



/****************************************Construction Functions******************************** */
function Circle(radius) {
    this.radius=radius;
    this.draw = function () {
        console.log("Draw");
        
    }
    
}

const object2= new Circle(2);
console.log(object2);

/****************************************Construction Functions end******************************** */


/****************************************Dynamic Nature Objects******************************** */
const Rectangle = {
    width:25,
    height:30
}
Rectangle.draw=function() {
    console.log("Drwa");
}
Rectangle.color='yellow';
console.log('Before deleting properties from objects', Rectangle);
delete Rectangle.color;
delete Rectangle.draw;
console.log('After deleting properties from objects', Rectangle);
/****************************************Dynamic Nature Objects edns******************************** */

/****************************************Constructor Property******************************** */
console.log('construction property', object2.constructor);
console.log('construction property of a function that create objects', Rectangle.constructor);
/****************************************Cosntructor Property Ends******************************** */


/****************************************Functions are objects******************************** */
console.log('in Js functions are objects', createObjects.length);
console.log('in Js functions are objects', createObjects.constructor);
/****************************************Functions are objects ends******************************** */

/****************************************Primitive & Reference Types******************************** */
let number=10;
function  Increase(number) {
    number++;
    
}
Increase(number);
console.log('Value Types',number);

const obj={
   num: 10
}
function  Increase(obj) {
    obj.num++;
    
}
Increase(obj);
console.log('Refrence Types',obj);
/****************************************Primitive & Reference Types ends******************************** */

/***********************************Enumerating properties of an object******************************** */
for(let key in Rectangle){
    console.log(key, Rectangle[key]);
}

//we use for of loop to iterate objects in the following ways
for(let key of Object.keys(Rectangle)){
    console.log(key);
}
/***********************************Enumerating properties of an object Ends******************************** */


/***********************************Clon an Object******************************** */
const otherRectangle={};
for(let key in Rectangle){
    otherRectangle[key]=Rectangle[key];
}
console.log('Clone of Rectangle Object',otherRectangle);

//other equivalent way todo this job is
const otherRectangle2=Object.assign({}, Rectangle);
console.log('clone of Rectangle object', otherRectangle2);
/***********************************Clon an Object ends******************************** */

/***********************************Template Literal******************************** */
let courseName='Php'
const msg= `This is my first
${courseName} programming course`;
console.log(msg);
/***********************************Template Literal end ******************************** */

/***********************************Date Object ******************************** */
const date1= new Date()
console.log(date1);
/***********************************Date Object ends ******************************** */









/***********************************Exercise 1 ******************************** */
const address={
street:11,
city:'Lahore',
zipcode: 53230
};

function showAddress(address) {
    for(let key in address){
        console.log(address[key]);
    }
}
showAddress(address);

/***********************************Exercise 1 Ends ******************************** */

/***********************************Exercise 2 ******************************** */
function FacObject(street, city, zipcode) {
    return{
        street,
        city,
        zipcode
    };
    
}
let add1=FacObject(5, "LHR", 3343 );
console.log(add1);

function ConsAdrees(street, city, zipcode) {
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;
}
const add2= new ConsAdrees(5, 'LHR', 3343)
console.log(add2);


/***********************************Exercise 2 Ends ******************************** */

/***********************************Exercise 3 two objects Are Equal? ******************************** */
function areEqual(add1, add2) {
    return (add1.street===add2.street && add1.city===add2.city && add1.zipcode===add2.zipcode) ? true : false
    
}
console.log('Objects are Equal?',areEqual(add1, add2));


function areSame(add1, add2) {
    return(add1==add2)? true : false;
}
console.log('objeccts are same?', areSame(add1, add2));
/***********************************two objects Are Equal? end ******************************** */

/***********************************Exercise 4 Blog post Object ******************************** */
const post={
    title:'socail meida post',
    body: 'social media has highest media impact',
    autor: 'Muhammad Waseem',
    views: 30,
    comments: [
            {
            autor: 'a',
            title: 'b',
        },
        {autor:'c', title:'d'}
    ],
    isLive:true

}
console.log('Blog post Object', post);
/***********************************Exercise 4 Blog post Object end ******************************** */

/***********************************Exercise 5 Blog post Object using costructor ************************** */
function PostBlog(title, body, author) {
    this.title=title;
    this.body=body;
    this.author=author;
    this.views=0;
    this.comments=[];
    this.isLive=false;

    
}
const blog1= new PostBlog('Blog post', 'this is blog post', 'waseem');
console.log(blog1);
/***********************************Exercise 5 Blog post Object using costructor end ************************** */