function add_to_cart(id)
{


var x = window.localStorage.getItem('product_'+id);

x = x*1+1


window.localStorage.setItem('product_'+id, x)

alert ('product_'+id +"=" + x);
	
}

function delete_to_cart()
{


localStorage.clear()

alert ("Cart is clear!")

	
}