/*
let items=document.querySelector('#items');
let parent=items.parentNode;
parent.style.backgroundColor="#f4f4f4";
let grandParent=parent.parentNode;
grandParent.style.backgroundColor='blue';
console.log(parent);
*/
//parent Element is another way to select the parent node. This is an alternative of ParentNode.

let items=document.querySelector('#items');
let parent=items.parentElement;
parent.style.backgroundColor="#f4f4f4";
let grandParent=parent.parentElement;
grandParent.style.backgroundColor='blue';
console.log(parent);

//ChildNodes returns an array/Node-list containing a list of childers but at index 0 have a text node.
let childItems=items.childNodes;
console.log('List of child items of ul', childItems);
// we perefrly use childerns property to get all the childs of an elements.
console.log('Childrens of ul', items.children);
console.log('First child of ul', items.children[0]);
console.log('First Child', items.firstChild);
console.log('First Element', items.firstElementChild);
items.firstElementChild.style.color="red";

//Last Child
console.log('Last Child', items.lastChild);
//lastElementChild
console.log('Last Element Child', items.lastElementChild);
items.lastElementChild.style.color='blue';

/********************************** Siblings ************************************* */
console.log('Next sibling', items.nextSibling); //returns a text node
console.log('Next Element Sibling', items.nextElementSibling); //returns next sibling of ul

//Previous Siblings
console.log('Previous Sibling', items.previousSibling); // returns a text node.
console.log('Previous Element Sibling', items.previousElementSibling);
items.previousElementSibling.style.color='green';
/********************************** Siblings ends ************************************* */



/********************************** Create Elements ************************************* */
let newDiv=document.createElement('div');
newDiv.className='first-div';
newDiv.id='First_id';
newDiv.setAttribute('title', 'Hello first div');
console.log('Create a div', newDiv);
//Create text node
let textDiv=document.createTextNode('Hello My first div');
//Add text to div
newDiv.appendChild(textDiv);
console.log(newDiv);
let cont=document.querySelector('#item-col')
let head=document.querySelector('#header-title');
console.log(head);
cont.insertBefore(newDiv, head);
/********************************** Create Elements ends ************************************* */