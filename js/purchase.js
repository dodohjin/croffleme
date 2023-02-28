//order info copy
//1. Create boxes as many as ordered. 
//2. Copy what you ordered and put into the boxes you created.
//3. Copy the quantity and the subtotal price.
//4. Calculate the tax.
//5. Calculate the Total Price adding tax and tip. 
// let orderlist = window.localStorage.getItem('orderList');
// document.getElementById('copy').innerHTML=orderlist;


//get orderlist and subprice
let orderList = sessionStorage.getItem('orderlist');
let subPrice = sessionStorage.getItem('total-price');
console.log(orderList);
document.querySelector('.copy-order').innerHTML=orderList;
document.querySelector('.copy-price').innerHTML="<br> Subtotal : $ "+ subPrice ;

// Tips!

    
//     var tipBtn = document.getElementsByClassName('tip');
//     for(i=0 ; i<tipBtn.length; i++){
//         button = tipBtn[i];
//         button.addEventListener('click', (event)=> {
//         button = event.target;
//         var tipClicked = Number(button.innerHTML.replace('%',''));
//         return tipClicked;
//     })
// }
    // console.log(tipClicked);


// calculate total price

var subSubPrice=Number.parseInt(subPrice);
var tax = Number(subSubPrice*0.1);
var tip = 0;
var totalTotal = subSubPrice + tax + tip;

document.querySelector('.total-total').innerHTML = `
<p>Tax = $ ${tax.toFixed(1)}</p>
<p>Tips = $ ${tip}</p>
<p>Total Price = $ ${totalTotal}</p><br>
`
