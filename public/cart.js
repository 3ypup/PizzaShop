function add_to_cart(id)
{


alert ('you added pizza with id '+id);

	
}

function delete_to_cart()
{


var cart = window.localStorage.getItem('cart')


cart = 0

window.localStorage.setItem('cart', cart)

alert (cart)


	
}