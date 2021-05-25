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
console.log("max number is" + maxNumber(5, 4));
/***********************************Exercise:1 ends ****************************************** */


/***********************************isLandscape Exercise ****************************************** */
 function isLandscape(width, height){
    
       return width>height? true: false;
 }
console.log("The image is landscape?"+  isLandscape(30, 20))
/***********************************isLandscape Exercise End ****************************************** */


/***********************************FizzBuzz function ****************************************** */
//divisible by 3 ->fizbuzz
//divible by 5->buzz
//divisible by 5 and 3 ->fizbuzz
//not divisible by 3 or 5 return the same number
//input on string->not a numbr

function FizBuzz(input){
     if(typeof(input) !== 'number'){
         return 'Not a number';
     }
     else if(input%3==0 && input%5==0){
        return 'FizzBuzz';
    }
     else if(input%3==0){
         return 'Fizz';
     }
     else if(input%5==0){
         return 'Fuzz';
     }
     
     else{
         return input;
     }
}
console.log(FizBuzz(15));
/***********************************FizzBuzz function end ****************************************** */



/***********************************Check spped Limit function ********************************/
function checkSpeed(speed){
    const spedLimit=70;
    const pointsPerKM=5;
    if(speed<=spedLimit+pointsPerKM){
        console.log('Ok');
    }
    else{
        let points= Math.floor(((speed-spedLimit)/pointsPerKM));
        if(points > 12){
            console.log("License cancelled");
        }
        else{
            console.log('points', points);
        }
    }
}

checkSpeed(100);
/***********************************Check spped Limit function end ********************************/

/***********************************odd and Even Number********************************/

function showNumbers(limit){
    for(let i=0; i<=limit; i++){
        if(i%2==0){
            console.log(i, "EVEN");
        }
        else if(i%2!==0){
            console.log(i, "ODD");
        }
    }
}
showNumbers(5);

/***********************************odd and Even Number end********************************/

/***********************************Calculate Truthy********************************/
let array = [0, undefined, null, false, '', true, 'mosh', 123, ];
let count=0;
function calculateTruthy(array){
    for(let value of array){
        if(value){
            count++;
        }
    }
    return count;
}
console.log('thrthy values in array are',calculateTruthy(array));
/***********************************Calculate Truthy end********************************/

/***********************************Show properties of object********************************/
let student={
Name:"waseem",
Age:24,
section: 'Gold'
};

function showProperties(student){
    for(let props in student){
        if(typeof(student[props])==='string'){
            console.log(props, student[props]);
        }
    }
}
showProperties(student);
/***********************************Show properties of object ends********************************/

/***********************************sum of multiples of 3 and 5********************************/
function sumofLimit(limit){
    let sum=0;
    for(let i=0; i<=limit; i++){
        if(i%3==0 || i%5==0){
            sum+=i;
        }
    }
    return sum;
}
console.log('sum of multiples of 3 and 5 is', sumofLimit(10));
/***********************************sum of multiples of 3 and 5 end********************************/


/***********************************Calculate Grades********************************/
const grades=[60, 75, 97, 80, 84];
let sum=0;
let avg=0;
function calculateGrade(grades){
    for(let key in grades){
        sum=sum+grades[key];
    }
    avg= Math.floor(sum/5);
    if(avg>0 && avg<=59){
        console.log('F');
    }
    else if (avg >60 && avg<= 69){
        console.log('D');
    }
    else if (avg >70 && avg <= 79){
        console.log('C');
    }
    else if (avg>80 && avg<=89){
        console.log("B");
    }
    else if(avg >90 && avg<= 100){
        console.log('A');
    }
}
 calculateGrade(grades);
/***********************************Calculate Grades ends********************************/


/***********************************showStar********************************************/
function showStar(num){
    for(let i=1; i<=num; i++){
        let pat="";
        for(let j=0; j< i; j++){
         pat=pat+ '*';
        }
        console.log(pat);
    }
}
showStar(10);
/***********************************showStar********************************************/

/***********************************showPrimes********************************************/

function showPrimes(limit){
    let isPrime=true;
   for(let num=2; num<=limit; num++){
       isPrime=true;
       for (let fac=2; fac< num; fac++){
           if(num%fac===0){
            isPrime=false;
            break;
           }
       }
       if(isPrime){
           console.log(num);
       }
   }
}
showPrimes(10);

/***********************************showPrimes ends********************************************/