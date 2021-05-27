const numbers=[3,4,5,3];
//end
numbers.push(7, 8);
console.log('pushes at end', numbers);
//begining
numbers.unshift(0,-1);
console.log('biggining of array', numbers);
//middle
numbers.splice(4, 0, 12);
console.log('middle of array', numbers);

/*******************************Find Element in an Array**************************************** */
console.log('find by inex', numbers.indexOf('a'));
console.log('find by inex', numbers.indexOf(4));
console.log('find by Lastindex', numbers.lastIndexOf(3));
console.log('Is Present', numbers.includes(-1));
/*******************************Find Element in an Array end**************************************** */

/*******************************Find References types form array**************************************** */
const courses=[
    {Name:'phy', id:1},
    {Name: 'Chem', id:2},
    {Name: 'Math', id:3}
];
const course=courses.find(function(course){
    return course.Name=='phy';
});
console.log(course);
/*******************************Find References types form array**************************************** */

/*******************Find References types form array using arrow function****************************** */
const course1= courses.find((course)=>{
    return course.id===2;
});
console.log('Arrow function', course1);
/*******************Find References types form array using arrow function ends****************************** */


/******************************Removing Elements From Array************************************ */
//end
console.log('Remove from Last', numbers.pop());
//start
console.log('Remove from start', numbers.shift());
//middle
console.log('Remove from middle', numbers.splice(4, 1));
console.log(numbers);
/******************************Removing Elements From Array end************************************ */


/****************************Emptying array*************************** */
//solution1
// console.log(numbers.length=0);

//solution2
console.log(numbers.splice(0, numbers.length));
console.log(numbers);
/****************************Emptying array end*************************** */

/****************************Combine and Split arrays*************************** */
const first=[1,2,3,4];
const second=[5,6,7,8];
const Combined= first.concat(second);
console.log('combined array is', Combined);
console.log('slice an array', Combined.slice(4));
/****************************Combine and Split arrays ends********************** */

/****************************Spread Operator********************** */
const combined2=[...first, ...second];
console.log('Spread operator', combined2);
const combined3=['abc', ...first, ...second, 123];
console.log(combined3);
/****************************Spread Operator end********************** */

/****************************Iterating arrays********************** */
console.log('Iterate array using for In loop')
for(let key in combined3){
    
    console.log('key', combined3[key]);
}
console.log('Iterate array using for of loop')
for(let key of combined3){
    console.log(key);
}
console.log('Iterate array using for each loop')
numbers.forEach((Num, index) =>console.log(Num, index ));
/****************************Iterating arrays end********************** */

/****************************Joining arrays********************** */
combined3.join(',');
console.log('After joining', combined3);
const msg="this is my first message";
const spe= msg.split(' ');
console.log(spe);
const joined=spe.join('-');
console.log(joined);
/****************************Joining arrays ends********************** */

/***************************sorting Arrays********************** */
const unsort=[123, 4, -1, 35, 6, 3];
console.log('After sorting array', unsort.sort());
console.log('After sorting array in reverse order', unsort.reverse());

const shorts=[
{id:1, Name: 'gop'},
{id:4, Name: 'got'},
{id:3, Name: 'gog'},
{id:2, Name: 'goh'}
];
shorts.sort(function(a,b){
 const nam1=a.Name.toLocaleLowerCase();
 const nam2=b.Name.toLocaleLowerCase();
 if(nam1<nam2){
     return -1;
 }
 if(nam1>nam2){
     return 1;
 }
 else{
     return 0;
 }
});
console.log(shorts);
/***************************sorting Arrays end********************** */


/***************************Testing Arrays********************** */
const Test=[1,2,56,4,-5, 56, -7, 6];
let count=0;
const pos= Test.every(function(value){
    return value>=0;
});
console.log('Number of +ves in array are', pos);
/***************************Testing Arrays ends********************** */

/***************************Filtering Array********************** */
//get all positives
const Allpositive=Test.filter(function(value){
    return value>=0;
});
console.log('Array containing all positives', Allpositive);
/***************************Filtering Array end********************** */


/***************************Mapping Array********************** */
const mapArray=Allpositive.map(function(num){
    return '<li>'+ num + '</li>';
});
console.log(mapArray);

/***************************Mapping Array ends********************** */

/***************************Reducing Arrays********************** */
const sumArray=[1,3,4,5, -1, 3];
const sum=sumArray.reduce(function(accumelator, sum)
{
    return accumelator+sum;
}, 0);
console.log('sum 0f Array is', sum);
/***************************Reducing Arrays ends********************** */

/***************************Exercise 1********************** */
function arrayFromRange(min, max){
    const outPut=[];
    for(let i=min; i<=max; i++){
        outPut.push(i);
    }
    return outPut;
}
const newArray=arrayFromRange(-11,0);
console.log('Array From a range',newArray);
/***************************Exercise 1 ends********************** */

/***************************Exercie 2 Includes?********************** */
function isInclude(array, element){
    let Flag=false;
  for(let key of array){
      if(key===element){
          Flag= true;
      }
  }
  return Flag;
}
const chek=isInclude(newArray, 0);
console.log(chek);
/***************************Exercie 2 Includes end?********************** */

/***************************Exercie 3 Exclude Value********************** */
function excludeValue(array, exclude){
    const excluded=[];
    for(let key of array){
        if(!exclude.includes(key)){
            excluded.push(key);
        }
    }
    return excluded;
}
const output2=excludeValue(newArray, [1,-1,2,0,-10, -7]);
console.log('Array Excluding elelments',output2);

/***************************Exercie 3 Exclude Value ends********************** */
const countElement=[1,22,4,4,4,56,7];
function countNumber(array, element){
    let sum=0;
    for(let key of array){
        if(key===element){
            sum++;
        }
    }
    return sum;
}
const occurence=countNumber(countElement, 7);
console.log(occurence);
/***************************Exercie 3 Exclude Value ends********************** */

/***************************Exercie 4 GetMax********************** */
function getMax(array){
    let max=array[0];
    for(let i=1; i<array.length; i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    return max;
}
const arry2=[4,6,7,8,9,34]
const max=getMax(arry2);
console.log('maximum in array is', max);
/***************************Exercie 4 GetMax ends********************** */


/***************************Exercie 5 Movies********************** */
const Movies=[
    {title:'a', year:2017, rating: 4.3},
    {title:'b', year:2016, rating: 4.5},
    {title:'c', year:2018, rating: 4},
    {title:'d', year:2019, rating: 4.5},
    {title:'a', year:2021, rating: 5.5},
    {title:'f', year:2012, rating: 5.5},
]
//can't solve yet
/***************************Exercie 5 Movies ends********************** */

