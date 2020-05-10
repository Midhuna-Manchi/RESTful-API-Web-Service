# RESTful-API-Web-Service



## Description

This web application is a RESTful API service created using Node.js platform, using 'Express' framework.

The application has also been packaged into a Docker container.

Below sections give an overview of each component of the application:

## 1. REST API service

The RESTful service provide API endpoints for 4 different types of GET routes, as below:

### a. All Customers:
  This route returns details of all customers in the database.
  It is invoked using the ```/``` GET route.
  
  Eg: *&lt;host&gt;:&lt;port&gt;/* would return details of all Customer.
  
### b. Single Customer:
  This route returns details of a single specified customer.
  It is invoked using the ```/<customer-id>``` GET route.
  
  Eg: *&lt;host&gt;:&lt;port&gt;/2* would return all details of Customer with ID '2'.
  
### b. All Orders for a Customer:
  This route returns all orders for a specified customer.
  It is invoked using the ```/<customer-id>/orders``` GET route.
  
  Eg: *&lt;host&gt;:&lt;port&gt;/2/orders* would return details of all orders made by Customer with ID '2'.
  
### d. A Specific Order for a Customer:
  This route returns details of a single specified order made by a specificed customer.
  It is invoked using the ```/<customer-id>/orders/<order-id>``` GET route.
  
  Eg: *&lt;host&gt;:&lt;port&gt;/2/orders/4* would return all details of Order with ID '4' made by a Customer with ID '2'.


## HTML Client

The HTML client is designed to pull data from all 4 API endpoints offered from the RESTful Web service mentioned above.
The below parts control the data pulled from different APIs:

### 1. 'Customer' dropdown:
This dropdown helps us choose the customer/s for whose details are to be viewed.
It has the below options:

#### a. All Customers:
Selecting this option displays details of all customer.
This route gets details using the ```/``` GET route.

#### b. Single Customer:
This option displays details of a single selected customer.
This route gets details using the ```/<customer-id>``` GET route.

### 2. 'Orders' dropdown:
This dropdown helps us view the selected customer's order details.
It has the below options:

#### a. All Orders:
This option displays details of all order for the selected customer.
This route gets details using the ```/<customer-id>/orders``` GET route.

#### b. Single Order:
This option displays details of the selected order for the selected customer.
This route gets details using the ```/<customer-id>/orders/<order-id>``` GET route.


## Prerequisites

1. [Node.js](https://nodejs.org/en/download/) must be installed on the machine.
2. [Docker]() must be installed on the machine.


## Execution Instructions

Below steps are to followed in 'Windows 10' for bringing up the RESTful API web service & viewing the HTML web page :

**Step 1:**  Open```Command Prompt```

**Step 2:**  Run the following command: ```cd <Project_Folder_Name>```

**Step 3:**  Run the following command: ```git clone ```

**Step 4:**  Run the following command: ```cd server```

**Step 5:**  Run the following command: ```npm install express --save```

**Step 6:**  Run the following command: ```npm install body-parser --save```

**Step 7:**  Run the following command: ```npm install cookie-parser --save```

**Step 8:**  Run the following command: ```npm install multer --save```

**Step 9:**  Run the following command: ```npm install cors --save```

**Step 10:**  Run the following command: ```docker build -t myfirstapi -f ./.Dockerfile .```

**Step 11:**  Run the following command: ```docker run -it -p 5000:8081 myfirstapi```

**Step 12:** Using File Explorer browse to the ```<Project_Folder_Name>``` folder and double-click the ```Home.html``` file.

**Step 13:** Select the appropriate value from **Customer/s** and **Order/s** drop-down and browse through the data.

**Note:** In the above commands, please replace *<Project_Folder_Name>* with a suitable name (like 'my-app').
