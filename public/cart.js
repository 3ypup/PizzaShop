function add_to_cart(id)
{
var key = "product_"+ id

var x = window.localStorage.getItem(key);

x = x*1+1


window.localStorage.setItem(key, x)

alert ('product_'+id +"=" + x);

update_orders_input();
	
}




function view_the_desk()

{

	var cnt = 0;

for(var i = 0; i < window.localStorage.length; i++ ) 
	{
		
		var key = window.localStorage.key(i); 

		var value = window.localStorage.getItem(key);
	

	if (key.indexOf('product_')==0)
	{
		cnt=cnt+value*1;
	}


	}



update_orders_input();

alert ("You ardered "+cnt+" pizzas!!")


}


function get_orders()

{

	var orders = "";

for(var i = 0; i < window.localStorage.length; i++ ) 
	{
		
		var key = window.localStorage.key(i); 

		var value = window.localStorage.getItem(key);
	

	if (key.indexOf('product_')==0)
	{
		orders = orders+"_"+key+"="+value*1+","
	}


	}

return orders




}


		



function update_orders_input()

{

var orders = get_orders();

$('#orders_input').val(orders);




}

function delete_to_cart()
{


localStorage.clear()

alert ("Cart is clear ")


update_orders_input();	
}