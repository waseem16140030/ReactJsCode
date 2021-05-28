// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


/****   Selecting methods   */
//GetElementbyID//
// console.log(document.getElementById("header-title"));

let page_title=document.getElementById("header-title");
console.log(page_title.textContent="Hello world");
console.log(page_title.innerText="Hello world");
console.log(page_title.innerHTML="<h5>Hello world</5>");
page_title.style.color="red";


//GetElementsbyClassName//

let items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[0].style.backgroundColor="green");


/*** style all list items using a loop*/

for( let i=0; i< items.length; i++){
    items[i].style.backgroundColor="lightgrey";
}

//GetElementsbyTagname//
let list_items=document.getElementsByTagName('li');
console.log(list_items);
for(let j=0; j<list_items.length; j++){
    list_items[j].style.fontSize="18px";
}

//QuerySelector//

let header=document.querySelector("#header-title");
header.style.color="white";

let input=document.querySelector('input');
input.value="List item 1";

let submit=document.querySelector('button[type="submit"]');
console.log(submit);
submit.innerHTML="Submit";

let last_item=document.querySelector('.list-group-item:last-child');
last_item.style.color="red";
let sec_item=document.querySelector('.list-group-item:nth-child(2)');
sec_item.style.color="blue";


//QuerySelectorAll//

let odd= document.querySelectorAll('li:nth-child(odd)');
for(let k=0; k< odd.length; k++){
    odd[k].style.backgroundColor="grey";
}
console.log(odd);
