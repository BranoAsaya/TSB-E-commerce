const arrEXTRAS=[];
shortItemByCategory("extras",arrEXTRAS)
console.log(arrEXTRAS);
let extrasGrid = document.getElementById("extras-sct")
let proIII= getProducts(arrEXTRAS,extrasGrid)
console.log(proIII);
let btnAddIII = document.getElementsByClassName("btn")
let itemCardIII=document.getElementsByClassName("con-pro")
addItemToCart(btnAddIII,arrEXTRAS) 
