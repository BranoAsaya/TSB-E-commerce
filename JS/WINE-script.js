const arrWINE=[];
shortItemByCategory("wine",arrWINE)
console.log(arrWINE);
let wineGrid = document.getElementById("wine-sct")
let proI= getProducts(arrWINE,wineGrid)
console.log(proI);
let btnAddI = document.getElementsByClassName("btn")
let itemCardI=document.getElementsByClassName("con-pro")
addItemToCart(btnAddI,arrWINE)  