
# POST Request
### Getting a POST request:

All routing are done in **index.js** file  

We Require **express** to use the routing functionality and save it in a **router** variable to be used
		
		var  express  =  require('express');
	    var  router  =  express.Router();

To accept a **POST** request we use **router.post** and we get the request and response in the callback function.

	router.post('/',  function(req,  res,  next) {
		console.log("GET Request")
	});

> www.example.com is he home page of a website to get the home route we use "/"

As soon as we go to the home page we get a **console log** in the terminal written *GET REQUEST. As soon as we open the web page a request was made to the server to give the page for "/" route, but as we didn't send a response back the website keeps loading but the request was already sent so we get a console log at server side.

### Giving back Response:

**1.SEND RESPONSE**
						
	router.post('/something',  function(req,  res,  next) {
		res.send("This is a send Response")
	});
In this we get a GET request for **"/something"** route  and we send a string response of "*This is a send response*".

**1.RENDER RESPONSE**
						
	router.post('/more',  function(req,  res,  next) {
		res.render("index")
	});
In this we get a GET request for **"/more"** route and we render a page of name index (.ejs is added automatically) and we se a page as a response.

**1.REDIRECT RESPONSE**
						
	router.post('/hello',  function(req,  res,  next) {
		res.redirect("/more")
	});
In this we get a GET request for **"/hello"** and we redirect the response to **"/more"** route and /more renders a page as a response.


**1.JSON RESPONSE**
						
	router.post('/okay',  function(req,  res,  next) {
		res.json({"type":"json","string":"anything","number":123456,"boolean":true})
	});
In this we get a GET request for **"/okay"** and we send data in JSON format.


### Details about POST request

 1. It is mostly used to perform actions
 2. sending data using POST method is preferable as it is secure.
 3. POST routes are not accessible using the URL
 4. POST route are accessible only by form submation.

