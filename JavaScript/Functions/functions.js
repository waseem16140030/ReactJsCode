function walk(){
    console.log('Walk');
}
walk();
//function expression
let run=function(){
    console.log('run');
}
run();
let go=run;
go();

/*********************************Dynamic Arguments*********************************** */
function Sum(){
    let sum=0;
    for(let key of arguments){
        sum+=key;
    }
    return sum;
}
const total=Sum(1,2,3,3,4,4,5);
console.log('sum of all arguments is', total);
/*********************************Dynamic Arguments ends*************************** */

/*********************************Rest Operator*************************** */
function restSum(...args){
    return args.reduce((a, b)=>a+b);
}
const sumRest=restSum(1,2,34,56,7);
console.log('Sum using reset operator', sumRest);
/*********************************Rest Operator ends*************************** */

/*********************************Default Perameters*************************** */
function claculateIntrest(principle, rate=3.5, year=12){
    return principle*rate/100*year;
}
console.log("total interest is", claculateIntrest(10000));
/*********************************Default Perameters edns*************************** */
const person={
fName:'Muhammad',
lName:'waseem',
get fullName(){
    return (`${person.fName} ${person.lName}`);
},
set fullName(value){
    const part=value.split(' ');
    this.fName=part[0];
    this.lName=part[1];
}

}
person.fullName='Muhammad Wasi'
console.log(person.fullName);

/*********************************Setter and *************************** */


/*********************************Try and Catch *************************** */
const Book={
    title:'physics',
    price:340,
    get fullName(){
        return (`${Book.title} ${Book.price}`)
    },
    set fullName(value){
        if(typeof(value)!=='string'){
            throw new Error ('Value is not a string');
        }
        const part=value.split(' ');
        if(part.length!==2){
            throw new Error('Enter First and Last Name');
        }
        this.title=part[0];
        this.price=part[1];
    }
    
    }
    try{
        Book.fullName='Math 150';
        console.log(Book.fullName);
    }
    catch(e){
        alert(e);
    }
/*********************************Try and Catch end *************************** */

/*********************************Scope *************************** */
/*********************************Scope ends *************************** */



/*********************************Exercise 1 summ of varying args *************************** */

function sumArgs(...items){
    if(items.length===1 && Array.isArray(items[0])){
        items=[...items[0]];
        return items.reduce((a,b)=>a+b);
    }
    
}
console.log('Sum of varying Args', sumArgs([1,2,3,45,6,6,6]));
/*********************************Exercise 1 summ of varying args ends *************************** */


/********************************* Area of circle *************************** */
let circle={
    Radius:1,
    set setRadius(value){
        if(typeof(value)!=='number')
        {
            throw new Error('Radius should be a number');
        }
        this.Radius=value;
    },
    get Area(){
        return Math.PI*this.Radius*this.Radius;
    }

};
try{
    circle.setRadius=45;
}
catch(e){
    alert(e);
}
console.log('Area of circle is',circle.Area);
/********************************* Area of circle ends *************************** */