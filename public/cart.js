function add_to_cart()
{


var cart = window.localStorage.getItem('cart')


cart = cart*1+1

window.localStorage.setItem('cart', cart)

alert (cart)


	
}

function delete_to_cart()
{


var cart = window.localStorage.getItem('cart')


cart = 0

window.localStorage.setItem('cart', cart)

alert (cart)


	
}