# Getting Data from URL
Sometime we need to get data from URL like ID of users or the page number of the data, like all the non sensitive data or when to display different data for same like. Like for a profile page the layout is always same the thing that differ is the name and other details, so to find out which user to display we send that name in the URL.
### Frontend:
We can either make a link to send data through URL or we can directly type it in the URL bar.

**Using "a" tag:** 
	
	<a  href="/data/anurag"></a>	

We can also type the data in URL, 

The part that is static is the **/data** and the content that will be changing is the **/anurag**
If you can see the part after "/data" can be anything it can be /anurag or /dhanes or /Johndoe we just need the part after the /data so how are we going to achieve it?

### Backend
To accept a variable data we will use the params functionality.
	
	router.get('/data/:name',  function(req,  res,  next) {
		console.log(req.params.id);
	});

If we see in the get request we gave it a path of **/data/:name** so the /data is the static part and the part that will constantly will change is the content after the "/data" and we know it will be users name.

So what we have done is we added a ":" and then the name of the variable that will be accepting the data, so we added **:name** that signifies that anything after the part **/data** is going to be stored in the variable "name".

Now the question is how we can access the data, to access the data we use **req.params**.
	
	req.params.name

We use req.params and after that we add the name of our variable which is "name" so to access the content after "/data" we use **req.params.name**.

Now we can either use in the backend for any action or can use it to render a page with the name.