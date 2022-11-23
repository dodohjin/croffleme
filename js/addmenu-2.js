//open cart modal
const cart=document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.main-right');

cart.addEventListener('click', () => {
    if(cartModalOverlay.style.transform ='translateX(97.5%) translateY(-400%)'){
        cartModalOverlay.style.transform='translateX(97.5%) translateY(-90%)';
    } 
    else{
        cartModalOverlay.style.transform='translateX(97.5%) translateY(-400%)';
    }
})

// end of open cart modal

// close cart modal
const closeBtn = document.querySelector('#close-button');
closeBtn.addEventListener('click', ()=>{
    cartModalOverlay.style.transform='translateX(97.5%) translateY(-400%)';
});
cartModalOverlay.addEventListener('click', (e)=>{
    if(e.target.classList.contains('main-right')){
       cartModalOverlay.style.transform = 'translateX(97.5%) translateY(-400%)' 
    }
})
// end of close cart modal

// add products to cart
const addToCart = document.getElementsByClassName('add');
const productRow = document.getElementsByClassName('product-row');

for (var i=0; i < addToCart.length; i++){
    button = addToCart[i];
    button.addEventListener('click', addToCartClicked)
}

function addToCartClicked (event) {
    button = event.target;
    var cartItem = button.parentElement;
    var price = cartItem.getElementsByClassName('product-price')[0].innerText;

    var imageSrc = cartItem.getElementsByClassName('picture')[0].src;
    addItemToCart(price, imageSrc);
    updateCartPrice()
}

function addItemToCart(price, imageSrc) {
    var productRow = document.createElement('div');
    productRow.classList.add('product-row');
    var productRows = document.getElementsByClassName('product-rows')[0];
    var cartImage= document.getElementsByClassName('cart-image');

    for(var i=0; i<cartImage.length; i++){
        if(cartImage[i].src==imageSrc){
            alert('This item has been already added to the cart')
            return;
        }
    }

    var cartRowItems =`
    <div class="product-row">
        <img class="cart-image" src="${imageSrc}" alt="">
            <span class="cart-price">${price}</span>
            <input class="product-quantity" type="number" value="1">
            <button class="remove-button">Remove </button>
    </div>
    `

    productRow.innerHTML = cartRowItems;
    productRows.append(productRow);
    productRow.getElementsByClassName('remove-button')
    [0].addEventListener('click', removeItem)
    productRow.getElementsByClassName('product-quantity')
    [0].addEventListener('change',changeQuantity)
    updateCartPrice()



// set orderlist

    var orderRows=document.querySelector('.product-rows').innerHTML;
    console.log(orderRows);    
    sessionStorage.setItem('orderlist', orderRows);
}
// end of add products to cart



// Remove products from cart
const removeBtn = document.getElementsByClassName('remove-button');
for (var i=0; i<removeBtn.length; i++){
    button = removeBtn[i]
    button.addEventListener('click', removeItem)
}

function removeItem(event){
    btnClicked = event.target;
    btnClicked.parentElement.parentElement.remove()
    updateCartPrice()
}
// end of remove products from cart

// Update quantity input
var quantityInput=document.getElementsByClassName('product-quantity')[0];

for(var i=0; i<quantityInput; i++){
    input=quantityInput[i]
    input.addEventListener('change', changeQuantity)
}

function changeQuantity(event){
    var input = event.target
    if(isNaN(input.value) || input.value<=0){
        input.value=1
    }
    updateCartPrice()
}
// end of update quantity input


// update total price
function updateCartPrice(){
    var total=0
    for( var i=0; i<productRow.length; i+=2){
        cartRow=productRow[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement= cartRow.getElementsByClassName('product-quantity')[0]
        var price=parseFloat(priceElement.innerText.replace('$',''))
        var quantity=quantityElement.value
        total=total+ (price*quantity)
        Number(total);
    }
    document.getElementsByClassName('cart-total')[0].innerText = 
    '      Subtotal :  $ '+total
    document.getElementsByClassName('cart-quantity')[0].textContent = i/=2

    // set price 
sessionStorage.setItem('total-price', total);
}



//End of update total price

// checkout items
const checkOut=document.querySelectorAll('.checkout');
const closeCartModal=document.querySelector('.cart-modal');
checkOut.addEventListener('click', checkOutClicked)
function checkOutClicked(){
    alert('Thank you for your purchase');
    cartModalOverlay.style.transform='translateX(97.5%) translateY(-300%)'
    var cartItems = document.getElementsByClassName('product-rows')[0]
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartPrice()
}

    

//end of checkout items

//starage items
// function createList(){
// const orderlist=document.getElementsByClassName('cart-quantity').innerHTML;
// orderlist.addEventListener('click', () =>{
//     sessionStorage.setItem("OrderList", JSON.stringify(orderlist))
// })
// }