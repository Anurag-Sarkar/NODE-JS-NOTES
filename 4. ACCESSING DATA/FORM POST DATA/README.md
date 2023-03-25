# How to Get form data using POST method
In this we are going to talk about the **POST method**.

###  Frontend
In frontend we will create a simple form 
	
	<form  action="/form-data"  method="POST">
		<input  type="text"  name="name"  id="name"  />
		<input  type="text"  name="age"  id="age"  />
		<button>Submit</button>
	</form>
Now we set the **action** attribute of the form to the route we **want** our data to be requested at and we will explicitly set the method to **POST**.

Now when we click the submit button the form will send the data to the backend... but which data??
Here comes an **important** thing to note we need to **specify the name** of the data in the input field

	<input  type="text" name="age" id="name"  />

now the form know that he need to send this input field value with the name of "age".

### Backend 
In the backend we get the data by using the **body** property of data.

	router.get('/form-data',  function(req,  res,  next) {
		console.log(req.body)
		console.log(req.body.name)
		console.log(req.body.age)
	});
In this we use req.bodyto get a object that has key and value pairs of the data send in the request.

	{ name:anurag , age:30 }

To get each property we write the key name after the query like

	req.query.name
	req.query.age

This gives us the specific name data and the age data

## Note
POST route are not access able from the URL, and that is why they are secure and can be used to send sensitive data like passwords and OTPs.

You can have 2 same route names but one with GET and one with POST.