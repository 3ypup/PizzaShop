function add_to_cart(id)
{
var key = "product_"+ id

var x = window.localStorage.getItem(key);

x = x*1+1


window.localStorage.setItem(key, x)



update_orders_input();
update_orders_button();
	
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


return cnt

update_orders_input();
update_orders_button();



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


function update_orders_button()

{

var text = "Cart" + "("+ view_the_desk()+")";

$('#update_orders_button').val(text);




}

function delete_to_cart()
{


localStorage.clear()

alert ("Cart is clear ")


update_orders_input();
update_orders_button();	
}