
# GET Request
### Getting a GET request:

All routing are done in **index.js** file  

We Require **express** to use the routing functionality and save it in a **router** variable to be used
		
		var  express  =  require('express');
	    var  router  =  express.Router();

To accept a **GET** request we use **router.get** and we get the request and response in the callback function

	router.get('/',  function(req,  res,  next) {
		console.log("GET Request")
	});

> www.example.com is he home page of a website to get the home route we use "/"

As soon as we go to the home page we get a **console log** in the terminal written *GET REQUEST. As soon as we open the web page a request was made to the server to give the page for "/" route, but as we didn't send a response back the website keeps loading but the request was already sent so we get a console log at server side.

### Giving back Response:

**1.SEND RESPONSE**
						
	router.get('/something',  function(req,  res,  next) {
		res.send("This is a send Response")
	});
In this we get a GET request for **"/something"** route  and we send a string response of "*This is a send response*".

**1.RENDER RESPONSE**
						
	router.get('/more',  function(req,  res,  next) {
		res.render("index")
	});
In this we get a GET request for **"/more"** route and we render a page of name index (.ejs is added automatically) and we se a page as a response.

**1.REDIRECT RESPONSE**
						
	router.get('/hello',  function(req,  res,  next) {
		res.redirect("/more")
	});
In this we get a GET request for **"/hello"** and we redirect the response to **"/more"** route and /more renders a page as a response.


**1.JSON RESPONSE**
						
	router.get('/okay',  function(req,  res,  next) {
		res.json({"type":"json","string":"anything","number":123456,"boolean":true})
	});
In this we get a GET request for **"/okay"** and we send data in JSON format.


### Details about GET request

 1. It is mostly used to get request for pages
 2. sending critical data using get request is not recommended as it sends data through URL.


