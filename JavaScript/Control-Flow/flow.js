//Age
//Age is between 0 to 12 -> child
//Age is between 13 to 19 -> teen age
//age is between 20 t0 25 -> young
//age is betwen 26 to 30 -> mature
// age is > 30 old

/***********************************Control Flow using IF Else ****************************************** */

function Age ( age){
    if(age<=0){
        console.log("invalid input");
    }
    else if (age>0 && age<=12){
        console.log("person is child");
    }
    else if (age>12 && age<=19){
        console.log("person is teen age");
    }
    else if( age> 19 && age<= 25){
        console.log("person is young");
    }
    else if (age>25 && age <=30){
        console.log("person is mature");
    }
    else{
        console.log("person is old");
    }
}
Age(13);
/***********************************Control Flow using IF Else Ends****************************************** */



/***********************************Control Flow using Switch case ****************************************** */
let role='moderator';
switch(role){
    case 'guest':
        console.log("Guest user");
        break;
    case 'moderator':
        console.log("moderator user");
        break;
    case 'admin':
        console.log("admin user");
        break;
    default: 
    console.log("Unknow user/role");
    
}

/***********************************Control Flow using Switch case ends ****************************************** */



/***********************************JS for loop ****************************************** */

for(let i=0; i< 5; i++){
    if(i%2==0){
        console.log("Hello world" , i);
    }
}
console.log("for loop in reverse order");
for(let i=5; i>=0; i--){
    if(i%2==0){
        console.log("Hello world" , i);
    }
}
/***********************************Js for loop ends ****************************************** */


/***********************************Js while loop end ****************************************** */
let iter=0;
while( iter<=5){
    if(iter%2==0){
        console.log(iter);
    }
    iter++;
}
/***********************************Js while loop ends ****************************************** */



/***********************************Js Do while loop ****************************************** */
console.log("Do while loop");
let j=0;
do{
    if(j%2==0){
        console.log(j);
    }
    j++;
}
while(j<=5);

/***********************************Js Do while loop ends ****************************************** */



/***********************************Js Infinite Loop ****************************************** */
// let k=0;
// while(k>=0){
//     console.log(k);
// }
/***********************************Js Infinite loop ends ****************************************** */


/***********************************Js For in loop ****************************************** */
let person={
Name:'waseem',
age:30
};
for(let key in person){
    console.log(key, person[key]);
}

const colors=['red', 'green', 'blue'];
for(let index in colors ){
    console.log(index, colors[index]);
}
/***********************************Js For in loop ends ****************************************** */


/***********************************Js For of loop ends ****************************************** */
for(let color of colors){
    console.log(color);
}
/***********************************Js For of loop ends ****************************************** */


/***********************************Js Break ****************************************** */
for(let i=0; i<10; i++){
    // console.log(i);
    // if(i==5) break;
    if(i%2==0){
        continue;
    }
    console.log(i);
}
/***********************************Js Break ends ****************************************** */





/***********************************Exercise:1 Max of two ****************************************** */

function maxNumber(num1, num2){
    if(num2===num1){
        console.log("both are equal");
    }
    else if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}
console.log("max number is" + maxNumber(5,4));
/***********************************Exercise:1 ends ****************************************** */