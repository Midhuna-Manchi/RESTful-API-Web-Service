function loadAllCustomers(){
  var customerSelection = document.getElementById('customerSelection');
  
  fetch('http://192.168.99.100:8081/')
  	.then(function (response) {
  		return response.json();
  	}).then(function (data) {
        var table = document.getElementById("CustomerTable");
		
		var row_count = table.rows.length - 1;
		for (var i = 1; i <= row_count; i++) {
			table.deleteRow(1);
		}
		
		json_data = JSON.parse(JSON.stringify(data));
		
		customerSelection.options[0] = new Option('All Customers', 0);
		
		for(var i=0; i < json_data.length; i++) {
			customerSelection.options[i+1] = new Option('Customer: '+json_data[i].id, i+1);
			var row = table.insertRow(table.rows.length);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
				
			cell1.innerHTML = json_data[i].id;
			cell2.innerHTML = json_data[i].customerName;
			cell3.innerHTML = json_data[i].Address;
		}

		loadCustomerAllOrders();
    }).catch(function(error){
      console.log(error);
    })
}

function loadCustomer(){
var customerSelection = document.getElementById('customerSelection');
var user = customerSelection.options[customerSelection.selectedIndex].text
	if(user == 'All Customers')
	{
		loadAllCustomers();
	}
	else{
		user = user.substr(10);
		fetch('http://192.168.99.100:8081/'+user)
		.then(function (response) {
			return response.json();
		}).then(function (data) {
			var table = document.getElementById("CustomerTable");
			
			var row_count = table.rows.length - 1;
			for (var i = 1; i <= row_count; i++) {
				table.deleteRow(1);
			}
			
			json_data = JSON.parse(JSON.stringify(data));
			
			var row = table.insertRow(table.rows.length);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
				
			cell1.innerHTML = json_data.id;
			cell2.innerHTML = json_data.customerName;
			cell3.innerHTML = json_data.Address;
		}).catch(function (error) {
		        console.log(error);
		})
		loadCustomerAllOrders();
	}
}

function loadCustomerAllOrders(){
var customerSelection = document.getElementById('customerSelection');
var customerOrderSelection = document.getElementById('customerOrderSelection');

var user = customerSelection.options[customerSelection.selectedIndex].text;
if(user == 'All Customers')
{
	customerOrderSelection.options[0] = new Option('All Orders', 0);
	customerOrderSelection.disabled = true;
	
	var table = document.getElementById("CustomerOrdersTable");
		
	var row_count = table.rows.length - 1;
	for (var i = 1; i <= row_count; i++) {
		table.deleteRow(1);
	}	
}
else
{
	user = user.substr(10);
	customerOrderSelection.disabled = false;
	
	fetch('http://192.168.99.100:8081/customers/' + user + '/orders/')
		.then(function (response) {
			return response.json();
		}).then(function (data) {
			
			var table = document.getElementById("CustomerOrdersTable");
			
			var row_count = table.rows.length - 1;
				for (var i = 1; i <= row_count; i++) {
					table.deleteRow(1);
				}
			
			json_data = JSON.parse(JSON.stringify(data));
			
			customerOrderSelection.options[0] = new Option('All Orders', 0);
			
			var length = json_data.length;
			for(var i=0; i<length; i++) {
				customerOrderSelection.options[i+1] = new Option('Order: '+json_data[i].orderId, i+1);
				var row = table.insertRow(table.rows.length);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
					
				cell1.innerHTML = json_data[i].orderId;
				cell2.innerHTML = json_data[i].orderItems;
				cell3.innerHTML = json_data[i].price;
				cell4.innerHTML = json_data[i].date;
					
			}
		}).catch(function (error) {
					console.log(error);
		});
}
}




function loadCustomerOrder(){
var customerSelection = document.getElementById('customerSelection');
var customerOrderSelection = document.getElementById('customerOrderSelection');

var user = customerSelection.options[customerSelection.selectedIndex].text;
var order = customerOrderSelection.options[customerOrderSelection.selectedIndex].text;

if(order == 'All Orders')
{
	loadCustomerAllOrders();
}
else{
		user = user.substr(10);
		order = order.substr(7);
		
		fetch('http://192.168.99.100:8081/customers/' + user + '/orders/' + order)
			.then(function (response) {
			return response.json();
			}).then(function (data) {
			var table = document.getElementById("CustomerOrdersTable");
			
			var row_count = table.rows.length - 1;
				for (var i = 1; i <= row_count; i++) {
					table.deleteRow(1);
				}
			
			json_data = JSON.parse(JSON.stringify(data));
			
			var row = table.insertRow(table.rows.length);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
					
			cell1.innerHTML = json_data.orderId;
			cell2.innerHTML = json_data.orderItems;
			cell3.innerHTML = json_data.price;
			cell4.innerHTML = json_data.date;
	
	});
}
}