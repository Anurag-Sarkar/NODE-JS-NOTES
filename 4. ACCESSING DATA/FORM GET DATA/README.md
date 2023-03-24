# How to Get form data using GET method
The most common way to get data from frontend to backend is using **forms**.
There are 2 methods to submit a form response
In this we are going to talk about the **GET method**.

###  Frontend
In frontend we will create a simple form 
	
	<form  action="/form-data"  method="GET">
		<label  for="name">Name:</label>
		<input  type="text"  name="name"  id="name"  />
		<label  for="age">Age:</label>
		<input  type="text"  name="age"  id="age"  />
		<button>Submit</button>
	</form>
We set the **action** attribute of the form to the route we **want** our data to be requested at.
We did set the method attribute with "GET" but its is on GET method by default

Now when we click the submit button the form will send the data to the backend... but which data??
Here comes an **important** thing to note we need to **specify the name** of the data in the input field

	<input  type="text" name="age" id="name"  />

now the form know that he need to send this input field value with the name of "age".

### Backend 
In the backend we get the data by using the **query** property of data.

	router.get('/form-data',  function(req,  res,  next) {
		console.log(req.query)
		console.log(req.query.name)
		console.log(req.query.age)
	});
In this we use req.query to get a object that has key and value pairs of the data send in the request.

	{ name:anurag , age:30 }

To get each property we write the key name after the query like

	req.query.name
	req.query.age

This gives us the specific name data and the age data

## Note
If you notice the data is sent In the URL and this is the exact reason why we don't use GET method to send sensitive data like password using the GET method. 