const arrBEER=[];
shortItemByCategory("beer",arrBEER)
console.log(arrBEER);
let beerGrid = document.getElementById("beer-sct")
let pro= getProducts(arrBEER,beerGrid)
console.log(pro);
let btnAdd = document.getElementsByClassName("btn")
let itemCard=document.getElementsByClassName("con-pro")
addItemToCart(btnAdd,arrBEER) 
