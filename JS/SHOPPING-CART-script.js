let arrCART=[
 {id:100,name:"Corona Extra",price:10.50,description:"Corona Extra Mexican Lager Beer",category:"beer",pic:"https://s.alicdn.com/@sc04/kf/U62f857cbb4fa4e82b76add1787f99403W.jpg_300x300.jpg"},
 {id:201,name:"Brano wine",price:799.9,description:"Italian DOCG wine & wine glass",category:"wine",pic:"https://s.alicdn.com/@sc04/kf/Uf6f42c77f36e4e1b9205ea6788dd69b1t.png_300x300.png" },
 {id:300,name:"Jack Daniel's",price:170.50,description:"Tennessee whiskey",category:"liquor",pic:"https://s.alicdn.com/@sc04/kf/Ub9f9de85670b493aaac1966106a6ce5fd.jpg_300x300.jpg"},
 {id:400,name:"Jumex",price:29.4,description:"fruit juice",category:"extras",pic:"https://s.alicdn.com/@sc04/kf/Hfeaf8c6446a44d999f00a6777e51033ap.jpg_300x300.jpg"}
];
let sum=0;
for(let i=0;i<arrCART.length;i++){
 sum+=arrCART[i].price
}


console.log(arrCART);
let remove=document.getElementsByClassName("remove");
let items=document.getElementsByClassName("items");
let table=document.getElementsByClassName("table");
let totalSec=document.getElementById("price-section").innerHTML=`
 <div id="con-total">
<h2>Cart price:${sum}$</h2>
<button type="button" class="buy">BUY NOW</button>
<br><br>

</div>
`;



for(let i = 0 ; i < arrCART.length; i++){
    table[0].innerHTML+=`
        <tr class="items">
        <td> <img src="${arrCART[i].pic}" class="img-list"></td>
        <td>${arrCART[i].name}</td>
        <td>${arrCART[i].price}</td>
        <td>${arrCART[i].category}</td>
        <td>      
          <select name="Products" id="Products-select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
      </select>
      <button type="button" class="remove" >Remove</button>
    </td>
      </tr> `;
    };
  

    for(let i=0;i<arrCART.length;i++){
        remove[i].onclick=()=>{
            arrCART.splice(i,1);
            items[i].innerHTML=" ";
          
             
        }
    }

    
 
  
      
  
    





 