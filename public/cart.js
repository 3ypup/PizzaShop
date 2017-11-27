function add_to_cart(id)
{
var key = "product_"+ id

var x = window.localStorage.getItem(key);

x = x*1+1


window.localStorage.setItem(key, x)

alert ('product_'+id +"=" + x);
	
}




function view_the_cart()
{




alert("there is your cart!")


}

function delete_to_cart()
{


localStorage.clear()

alert ("Cart is clear!")

	
}