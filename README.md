# NodeJS with Express

Create a folder `exercises_express` then go to this folder in your terminal and execute:

```sh
npm init -y
```


### Exercise 1 ([Help](http://expressjs.com/guide/routing.html))

Install express into your directory with the `npm install express` command.
In order to open a server on port 3000, create an `app.js` file and add this content:

```js
const express = require('express');

const app = express();
app.listen(3000, () => console.log('Server running on port 3000'));
```
You can now open http://localhost:3000 in the browser.
If you see an error, that is expected behaviour as we haven't defined any `get` route yet. Still, it means your server is up and running.

### Exercise 2 ([Help](https://expressjs.com/en/guide/routing.html))
In this exercise, you are going to create an index route with the `get` method.
In `app.js`, create the get index route and have it output the string 'How are you?'.

### Exercise 3 ([Help](http://expressjs.com/fr/4x/api.html#res.sendFile))

In this exercise, you are going to create the homepage for your app and serve it on the `home` route.
Create a new directory `public` and inside it, create a html file called `homepage.html` and write this content in it:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello</title>
</head>
<body>
  <h1>How are you?</h1>
</body>
</html>
```

In `app.js`, get express to send this file when hitting the route `home` (at http://localhost:3000/home)

### Exercise 4 ([Help](http://expressjs.com/fr/4x/api.html#res.json))

In this exercise you'll get your server to send back some JSON when a _PUT_ request is performed.
The JSON will look like this:

```js
{"good" : "yep"}
```

In `app.js`, get express to send this json when hitting the route `home` with the method _PUT_.
Try out your request with postman or curl.

### Exercise 5 ([Help](https://ejs.co/) && [Help](http://expressjs.com/guide/using-template-engines.html) && [Help](https://scotch.io/tutorials/use-ejs-to-template-your-node-application))

Render this EJS code if the user accesses the URL `/test-ejs` and render this page with `Hey` as value of `title` variable.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <% if (title) { %>
    <h1><%= title %></h1>
  <% } %>
</body>
</html>
```

### Exercise 5 ([Help](https://ejs.co/))

We pass an array to our page `/test-ejs2`:

```js
{
  users : ['Bob', 'John', 'Jane' ]
}
```

Create an EJS page that uses the `forEach` method to list each element.
