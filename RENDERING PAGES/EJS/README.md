# What is EJS

In plain HTML we can only render HTML tag and components and if we can't change content dynamically we have to make a lot of webpages.
To render our own variables and content in HTML we use **special type** of rendering method called EJS.

> That's why while generating we use **--view=ejs** to set rendering engine to ejs

## How ejs works?
EJS works as normal HTML only unless we use special tags to tell it to render our own content

Type of EJS tags:

 * **<% variable %>** used to perform actions in the page. Used in if statements and for loop statements.
 * **<%= variable %>** used to display the value of the variable.
 * **<%- variable%>** used to render HTML tags from plain text.

> It is important to close the EJS tag in the same line as it was opened in

**CORRECT**
	
	<% if(condition) {
		//something
	<% } else { %>
		//something
	<% } %>
**WRONG**

	<% if(condition) {
		//something
		} else {
		//something
		} %>
All of the EJS file is kept in the views folder and we have already set the views folder in the aap.js file

# How to render EJS from backend
To render EJS we just say **res.render** and in the brackets we pass the filename without the extension.
	
	router.get('/',  function(req,  res,  next) {
		res.render('index');
	});

This will render index.ejs page when then home route is hit.
