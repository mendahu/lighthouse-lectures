# Checklist - Security and Advanced Web Servers

- [ ] Storing passwords
- [ ] Encrypted cookies
- [ ] HTTP Secure (HTTPS)

//Bonus

- [ ] REST
- [ ] More Routing in Express
- [ ] More HTTP methods
- [ ] Method Override [Stretch]
- [ ] JSON APIs [Stretch]
- [ ] Alternatives to Express [Stretch]

# Intro

- Talk about Password storage, unsecured cookies, and https
- `https://github.com/WarrenUhrich/lighthouse-labs-http-cookies-and-authentication/tree/2022.06.28-web-flex-day-16may2022`
- Clone Warren's repository `git@github.com:WarrenUhrich/lighthouse-labs-http-cookies-and-authentication.git`
- Switch to branch 2022.06.28-web-flex-day-16may2022
- Walk through app and recap it
  - Talk about routes - login/logout/register
  - Talk abour reading the cookie
  - Talk about plain text password

# Passwords

- Storing plain text is bad yo
  - Why is storing plain text bad
  - https://plaintextoffenders.com
  - https://github.com/plaintextoffenders
- Hashing
  - vs Encryption
  - one way
  - Fixed length
  - Rainbow tables
  - Salting

# Password Demo

- `npm i bcryptjs`
  - note about `bcrypt`
- Start with Register route to hash a password with a salt and store it
- Demo
- Convert login route to read the password

# Secure Cookies

- Demonstrate plain text cookies
- Demonstrate how you can change login

# Encryption

- Hashing was 1 way
- Encryption is two way - it can be decrypted
- Symmetric encryption is for single party

# Demo Session Cookies

- `npm i cookie-session`
  - look up cookie session docs to see how to set it up
  - `const cookieSession = require('cookie-session')`

```javascript
app.use(
  cookieSession({
    name: "session",
    keys: ["purple-dinosaur", "green-dinosaur", "yellow-dinosaur"],
    maxAge: MS_IN_A_DAY, // 24 * 60 * 60 * 1000
  })
);
```

- Replace register route - setting cookie
- replace logout route - clear cookie
- replace login route - set cookie again

# HTTPS

- Recall that we were sending plain text data, passwords from form to server
  - show request to server
- Assymetric encryption
- Public Key and Private Key
  - Trunk analogy - symmetric vs assymetric

# Review

- Hashing
- Symmetric Encryption
- Assymetric Encryption

# STRETCH

- REST, METHODS/OVERRIDES, ROUTE ORGANIZATION

# REST

- Resources (spaceships, posts, comments, users, likes, tweets)
- REST was a way to organize/describe these resources and CRUD operations on the resources
- spaceships

  - B `GET /spaceships`
  - R `GET /spaceships/:id`
  - E `POST /spaceships/:id`
  - A `POST /spaceships/new` - `POST /spaceships`
  - D `POST /spaceships/:id/delete`

- Facebook clone
  - resrouces:
    - posts
      - B `GET /posts`
      - R `GET /posts/:id` - `GET /comments/:id/posts`
      - E `POST /posts/:id`
      - A `POST /posts/new` - `POST /posts`
      - D `POST /posts/:id/delete`
    - comments
      - B `GET /comments` - `GET /posts/:id/comments/`
      - R `GET /comments/:id` `GET /posts/:id/comments/:id`
      - E `POST /comments/:id`
      - A `POST /comments/new` - `POST /comments` - `POST /posts/:id/comments/new`
      - D `POST /comments/:id/delete`

# Express Router

- Set up quick express file
- use these resources
- make at least two routes for each resources
- move them to routers
- `const router = express.Router()`
- `module.exports = router`
- Show
