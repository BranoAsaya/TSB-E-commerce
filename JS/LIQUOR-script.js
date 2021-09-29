const arrLIQUOR=[];
shortItemByCategory("liquor",arrLIQUOR)
console.log(arrLIQUOR);
let liquorGrid = document.getElementById("liquor-sct")
let proII= getProducts(arrLIQUOR,liquorGrid)
console.log(proII);
let btnAddII = document.getElementsByClassName("btn")
let itemCardII=document.getElementsByClassName("con-pro")
addItemToCart(btnAddII,arrLIQUOR)  