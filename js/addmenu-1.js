
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
    var productRow = document.getElementsByClassName('product-rows')[0];
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
    }
    document.getElementsByClassName('total-price')[0].innerText = '$'+total
    document.getElementsByClassName('cart-quantity')[0].textContent = i/=2
}
//End of update total price