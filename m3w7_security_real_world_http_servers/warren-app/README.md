# Lighthouse Labs | HTTP Cookies and Authentication

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-http-cookies-and-authentication/tree/2022.06.28-web-flex-day-16may2022) | [Vimeo Video Recording](https://vimeo.com/725014519/e8760bd0c3)

* [X] What is a Cookie?
* [X] Writing and Reading Cookies

## HTTP is Stateless

Remember, HTTP is not capable of keeping track of clients or client-behaviour on its own. HTTP servers wait for requests, and serve responses without such knowledge of what has transpired previously. If resources loaded soley based on HTTP's limitations, we'd find ourselves having to do things like log in to a website on every page, which would be a confusing and terrible user experience.

### State on the Web

We don't have to log in again and again, though, do we? Somehow, many websites *appear* to have state; if HTTP isn't directly responsible for this phenomenon, what is?

Web applications are responsible for this. Using scripts or programs on the server, we can make note of who is accessing the website and potentially store data about them for later retrieval. How, exactly, does a web application know who's who though?

* Many internet service providers use dynamic IP assignment, so we can't rely on everyone's IP address to be the same over any period of time.
* Most browsers are careful not to send a lot of additional information about your name, computer, etc. in your requests for security reasons, so we lose the potential to reliably track these, too.

Any ideas, as to something in the browser that can be easily sent in our requests?

## Cookies

Yum, a tasty snack, what a great idea! Unfortunately, the cookies we're about to chat about don't have as much flavour, but they are still incredible in their own right and essential for the web as we know it.

Modern web browsers are capable of storing data in a key-value format on a per-domain basis. The standard way of doing this is via a "cookie." Once a cookie is stored for a domain, it can easily be accessed by JavaScript on web pages hosted on that domain, as well as included in headers in requests to that domain.

### Cookies and Sessions

This brings us to one of the most common uses of cookies, a unique identifier. By storing a large, complex, and unique key in one of these key-value pairs in your browser, and sending that along with each request we make, an application on the server is able to understand that these requests should be associated with a specific user. This topic is usually considered "session," the idea of keeping track of a specific user and their visits to your website over time.

Stressing again, that HTTP itself is stateless, it is important to make the distinction that cookies are a feature of the browser. The idea of tracking a user's session via a uniquely identifying cookie, is a feature of many server-side application languages, frameworks, and/or programs.

## How it Works (Cookies and Sessions)

Consider the following common steps involving a cookie:

1. The client (let's say a web browser) submits a request to a website.
2. The website's response includes a cookie that the browser should store for this domain, featuring a unique identifier.
3. The client stores the cookie data; the user can browse the response as they see fit.
4. The client is free to make subsequent requests to that domain; the cookies are included in these requests.
5. An application on the server can read the cookies, and can be programmed to adjust their response accordingly.

Where might this come in handy? Any time you need to sign in to a website, a cookie of this nature is used to keep track of you, and offer the appearance of your retaining your "signed-in" status between requests. Because your unique cookie value, and the corresponding "session" in the web application, it is able to customize your experience with that website. On Facebook, this could be your profile, personal feed, settings, etc. These are all protected things that are stored on the server, and it uses this cookie as a way to ensure it delivers this private information to the right person.

For security's sake, cookies are not shared with domains outside of the one that asked your browser to create one. This is to avoid having another website just ask for your Facebook cookie and then sign in as you. This, along with traffic encryption techniques like HTTPS' SSL/TLS, offer good amounts of security, though other precautions are often made in addition (CAPTCHA, 2-factor, OAUTH, session expirations, and more.)

While this is an extremely important, technical, and common use for cookies, their use can also be far more benign. Perhaps a favourite font-colour for a web-page could be stored in a cookie, so all requests to the page reflect that preference. Then either the server, or JavaScript embedded in the web page, can make the appropriate adjustements to the content (if the feature is programmed into the application.) Cookies are extremely flexible, and can be considered for assisting in keeping track of all sorts of things.

### Summary

* Cookies are key-value pairs stored in the browser.
* Cookies are domain-specific, and are not included in requests to domains outside of that which they were set.

1. Client makes request.
2. Server recieves request.
3. Server sends response; response includes cookie information.
4. Client recieves response; updates its cookies as per response.
5. Client sends request; request includes cookies.

## Creating your own Cookies

### Set up a Project

Create a project that mimics the following:

```
├┬/public
│└┬/css
│ └main.css
│
├┬/views
│├┬/partials
││└_head.ejs
│└index.ejs
│
└index.js
```

Install the dependencies for our experiment:

```Bash
npm install express ejs body-parser cookie-parser
```

Fill in the files accordingly:

***/index.js***

```JavaScript
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express(); // Initialize and capture express app.
const port = 3000; // Port to use throughout file.

app.use(cookieParser()); // Add cookie parsing middleware.
app.use(express.static('public')); // Serve static files via public directory (CSS, images, etc.)
app.use(bodyParser.urlencoded({extended: false})); // Parses body of form request string as object.

app.set('view engine', 'ejs'); // Use EJS as our template engine.

// Home page.
app.get('/', (req, res) => {
  res.render('index');
});

// Listen for requests:
app.listen(port, () => { console.log(`${Date()}\nExpress server running on port: ${port}`); });
```

***/views/partials/_head.ejs***

```EJS
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTTP Cookies and Authentication</title>

    <!-- Stylesheet(s): -->
    <link rel="stylesheet" type="text/css" href="/css/main.css">
</head>
<body>
  <h1>HTTP Cookies and Authentication</h1>

```

***/views/index.ejs***

```EJS
<%- include('partials/_head.ejs') %>
 
  <p>Welcome to the Index!</p>

</body>
</html>
```

***/public/css/main.css***

```CSS
/* Set sans-serif font for everything in web-page. */
* {
  font-family: Arial, Helvetica, Ubuntu, sans-serif;  
}

/* Set font colour and shadow for headings in web-page. */
h1, h2, h3, h4, h5, h6 {
  color: salmon;
  text-shadow: 2px 2px 0 black;
}
```

Once the files are in-place and populated, run the project to confirm that the initial set-up is error-free and working as expected. The heading in the web-page should display as the colour specified in your CSS file if all is well!

### Let's get down to Business

So, our application is working. Let's see if we can create a basic system that allows a sign-in, and can keep track of the user between requests.

Before we get into writing any files, we'll want to think about **routes**. Which routes will we want present for a basic sign-in system here? Keep in mind we just have a basic `/` for our home so far:

* `GET /` (Home - can *contain* submittable form.)
* `POST /sign-in` (Sign-in form *submission*.)

We'll also want a simple set of users capable of signing in (note this is not how it is handled in-industry, but it gives us a very easy to see and trace what is happening.) Normally we'd want to have a database and include steps for encrypting and saving data to that database, but that's a discussion for another day. Let's focus on cookies and basic authentication first!

Update your `index.js` file accordingly:

***/index.js***

```JavaScript
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

// Create users data:
const users = [
  {id: 1, email: 'hello@warren.codes', name: 'Warren Uhrich', password: 'testing123'},
  {id: 2, email: 'sam@example.com', name: 'Samantha Williams', password: 'b3tt3rp@ssword?'}
];

app.listen(port, () => { console.log(`${Date()}\nExpress server running on port: ${port}`); });
```

We also need to add a form to our home page, if we want the user to be able to submit something. Note that this form could be on a separate page, you'd just have to create a different route to render it! We're just keeping it on the homepage for simplicity in this example.

Update your `/views/index.ejs` file like so:

```EJS
<%- include('partials/_head.ejs') %>
 
  <section>
    <h2>Please Sign In:</h2>
    <form method="POST" action="/sign-in">
      <label for="email-address-field">E-Mail:</label>
      <input type="email" name="email" id="email-address-field">
      <label for="password-field">Password:</label>
      <input type="password" name="password" id="password-field">
      <input type="submit" value="Sign In">
    </form>
  </section>

</body>
</html>
```

Take special note of the form element; it has two very important attributes: `method` and `action`. These are critical, as it tells the form how and where to submit! Recall in our planning we wanted our route to be `POST /sign-in`... compare this to what we had typed above: `method="POST" action="/sign-in"`, see how they are the same.

GET method requests include any form-submitted data in the URL (and consequently the browser address bar) of the request, making them ill-fitted for destructive actions, or sending sensitive data (like passwords.) POST requests include any form-submitted data in the body of the request (out of plain-sight) and are harder to accidently repeat or share; this makes them great for sign-in forms.

### Accepting Data from a Form Submission

Let's now accept data from the sign-in form, and use it to see if the information is a match for any users in our list:

***/index.js***

```JavaScript
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

const users = [
  {id: 1, email: 'hello@warren.codes', name: 'Warren Uhrich', password: 'testing123'},
  {id: 2, email: 'sam@example.com', name: 'Samantha Williams', password: 'b3tt3rp@ssword?'}
];

app.get('/', (req, res) => {
  res.render('index');
});

// Handle sign-in form submission.
app.post('/sign-in', (req, res) => {
    const {email, password} = req.body; // Deconstruct the object, retrieving the email and password values.
    // Filter through the users array, checking for a match.
    const currentUser = users.find(user => user.email == email && user.password == password);
    if (currentUser) {
        console.log(`Sign in successful for user ${currentUser.id}: ${currentUser.name} (${currentUser.email})`);
        res.end(`Sign in successful for user ${currentUser.id}: ${currentUser.name} (${currentUser.email})`);
    } else {
        console.error(`Sign in unsuccessful for attempted e-mail: "${email}" and password: "${password}".`);
        res.end(`Sign in unsuccessful for attempted e-mail: "${email}" and password: "${password}".`);
    }
});

app.listen(port, () => { console.log(`Server initialized: ${Date()}\nExpress server running on port: ${port}`); });
```

If all is well, we should have some output in the terminal and browser letting us know if the "sign-in" would have been successful or not. Of course, we have not yet set up a cookie in order to *keep* users logged in between requests so we'll have to jump into that next.

### Setting a Cookie

Now, if we head back to the homepage, it will simply ask us to sign in yet again. This is not a behaviour that a regular user would expect or understand. We'll finally need a way to store a cookie and keep track of this user, and whether or not they're signed in!

We can send cookie update information in our responses to the client:

***/index.js***

```JavaScript
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

const users = [
  {id: 1, email: 'hello@warren.codes', name: 'Warren Uhrich', password: 'testing123'},
  {id: 2, email: 'sam@example.com', name: 'Samantha Williams', password: 'b3tt3rp@ssword?'}
];

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/sign-in', (req, res) => {
    const {email, password} = req.body;
    const currentUser = users.find(user => user.email == email && user.password == password);
    if (currentUser) {
        console.log(`Sign in successful for user ${currentUser.id}: ${currentUser.name} (${currentUser.email})`);

        // Set a cookie in the result; in this case, containing the user's ID.
        res.cookie('userId', currentUser.id); // When the browser receives this, it will update the cookie with this key.

        res.end(`Sign in successful for user ${currentUser.id}: ${currentUser.name} (${currentUser.email})`);
    } else {
        console.error(`Sign in unsuccessful for attempted e-mail: "${email}" and password: "${password}".`);
        res.end(`Sign in unsuccessful for attempted e-mail: "${email}" and password: "${password}".`);
    }
});

app.listen(port, () => { console.log(`Server initialized: ${Date()}\nExpress server running on port: ${port}`); });
```

Check your browser web developer tools, there should be a tab for Application / Storage that you can use to read any cookie data. Try an unsuccessful sign-in, confirm that your cookies are unchanged. Now sign in using valid credentials—your browser should update with a cookie key-value pair! Your very first cookie, working a-okay, amazing!

Now that we have a cookie set in the browser, that client is capable of sharing this information with the server during requests.

Let's see about having our "Home" `/` page hiding the form if we're logged in, and perhaps show a welcome message.

### Reading a Client's Cookies

We'll want our `GET /` route to check for the client cookie...

* If the cookie is not set, show the form so the user can sign in.
* If the cookie is already set, try to grab the user.
  * If the user exists, print a welcome message; hide the form.
  * If the user doesn't exist, show the form and tell them the user information is invalid.

Alright, so for the above to take place, we'll need to update the `index.js` `GET /` route as well as our `views/index.ejs` template file:

***/index.js***

```JavaScript
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

const users = [
  {id: 1, email: 'hello@warren.codes', name: 'Warren Uhrich', password: 'testing123'},
  {id: 2, email: 'sam@example.com', name: 'Samantha Williams', password: 'b3tt3rp@ssword?'}
];

app.get('/', (req, res) => {
  // Attempt to retrieve cookie information.
  const userId = req.cookies.userId;
  if (userId) {
    const currentUser = users.find(user => user.id = userId);
    res.render('index', {currentUser}); // Include current user in render.
  }
  res.render('index', {currentUser: false}); // Default to false in render if no cookie or user found.
});

app.post('/sign-in', (req, res) => {
  const {email, password} = req.body;
  const currentUser = users.find(user => user.email == email && user.password == password);
  if (currentUser) {
    console.log(`Sign in successful for user ${currentUser.id}: ${currentUser.name} (${currentUser.email})`);
    res.cookie('userId', currentUser.id);
  } else {
    console.error(`Sign in unsuccessful for attempted e-mail: "${email}" and password: "${password}".`);
  }
  res.redirect('/'); // Redirect to home; remove res.end() example string outputs.
});

app.listen(port, () => { console.log(`Server initialized: ${Date()}\nExpress server running on port: ${port}`); });
```

***/views/index.ejs***

```EJS
<%- include('partials/_head.ejs') %>
 
  <% if (currentUser) { %>
    <section>
      <h2>Welcome, <%= currentUser.name %>!</h2>
      <p>You have successfully logged in. See your user information below:</p>
      <dl>
        <dt>ID</dt><dd><%= currentUser.id %></dd>
        <dt>Name</dt><dd><%= currentUser.name %></dd>
        <dt>E-Mail</dt><dd><%= currentUser.email %></dd>
      </dl>
    </section>
  <% } else { %>
    <section>
      <h2>Please Sign In:</h2>
      <form method="POST" action="/sign-in">
        <label for="email-address-field">E-Mail:</label>
        <input type="email" name="email" id="email-address-field">
        <label for="password-field">Password:</label>
        <input type="password" name="password" id="password-field">
        <input type="submit" value="Sign In">
      </form>
    </section>
  <% } %>

</body>
</html>
```

Try deleting the cookie manually, and then running through the sign-in steps again. Confirm that your redirect and sign-in logic works! Does the form disappear when you're logged in successfully? Now *that's* what we're talking about!

Alright, so we're able to add and update cookie information... what if we want to get rid of a cookie? In a case like the above, we're signing in, so what about signing *out*?

### Removing Cookies

Okay, so if we review again the routes we've prepared up until this point, we're working with:

1. `GET /` Home (sign-in form; user welcome.)
2. `POST /sign-in` Sign-in form submission handling.
3. `POST /sign-out` Sign out handling.

Wait... number three, that one's new! Yes, we'll likely want a path for this, as it will simplify our approach. Any time the client makes that appropriate request, we will know they want to be signed out and help them out. We know for starters we'll need to create a new `app.post()`, but it is the callback inside that'll have our new line:

***/index.js***

```JavaScript
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

const users = [
  {id: 1, email: 'hello@warren.codes', name: 'Warren Uhrich', password: 'testing123'},
  {id: 2, email: 'sam@example.com', name: 'Samantha Williams', password: 'b3tt3rp@ssword?'}
];

app.get('/', (req, res) => {
  const userId = req.cookies.userId;
  if (userId) {
    const currentUser = users.find(user => user.id = userId);
    res.render('index', {currentUser});
  }
  res.render('index', {currentUser: false});
});

app.post('/sign-in', (req, res) => {
  const {email, password} = req.body;
  const currentUser = users.find(user => user.email == email && user.password == password);
  if (currentUser) {
    console.log(`Sign in successful for user ${currentUser.id}: ${currentUser.name} (${currentUser.email})`);
    res.cookie('userId', currentUser.id);
  } else {
    console.error(`Sign in unsuccessful for attempted e-mail: "${email}" and password: "${password}".`);
  }
  res.redirect('/');
});

// Handle sign-out request.
app.post('/sign-out', (req, res) => {
  res.clearCookie('userId'); // Ensure the cookie key matches the one you'd like to remove.
  res.redirect('/'); // Redirect home; it will display the sign-in form again.
});

app.listen(port, () => { console.log(`Server initialized: ${Date()}\nExpress server running on port: ${port}`); });
```

Unless we add an easy link or button of some kind, the above suggests we want a user to guess they must type into their address bar: `localhost:3000/sign-out`, who would figure that out!? Let's add a link to make everyone's life easier:

***/views/index.ejs***

```EJS
<%- include('partials/_head.ejs') %>
 
  <% if (currentUser) { %>
    <section>
      <h2>Welcome, <%= currentUser.name %>!</h2>
      <p>You have successfully logged in. See your user information below:</p>
      <dl>
        <dt>ID</dt><dd><%= currentUser.id %></dd>
        <dt>Name</dt><dd><%= currentUser.name %></dd>
        <dt>E-Mail</dt><dd><%= currentUser.email %></dd>
      </dl>
      <p>If you'd like to sign out, please click the following button:</p>
      <form method="POST" action="/sign-out">
        <input type="submit" value="Sign Out">
      </form>
    </section>
  <% } else { %>
    <section>
      <h2>Please Sign In:</h2>
      <form method="POST" action="/sign-in">
        <label for="email-address-field">E-Mail:</label>
        <input type="email" name="email" id="email-address-field">
        <label for="password-field">Password:</label>
        <input type="password" name="password" id="password-field">
        <input type="submit" value="Sign In">
      </form>
    </section>
  <% } %>

</body>
</html>
```

Test it out again! Signing in, signing out... the works; woah. Impressive!

That's cookies: a delicious way for servers and web browsers to share information. 🍪

## Resources

* [Wikipedia: Cookies](https://en.wikipedia.org/wiki/HTTP_cookie)
* [MDN: Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
* [npm: `cookie-parser`](https://www.npmjs.com/package/cookie-parser)
* [npm: `body-parser`](https://www.npmjs.com/package/body-parser)
* [MDN: `Array.find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
* [EJS](https://ejs.co/#install)
* [node.js: `fs.writeFile()`](https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback)
