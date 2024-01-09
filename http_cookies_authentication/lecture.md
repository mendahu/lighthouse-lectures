### To Do

- [ ] HTTP and cookies
- [ ] Render pages differently based on language preference
- [ ] Register user with email and password

## Review HTTP

- HTTP is Stateless
  - No memory of previous requests
- biggest challenge with stateless - authentication
  - we don't want to have to send credentials with every single HTTP request.

## Cookies

- A cookie is a small piece of information that the server creates, but the browser/client stores.
- Cookies are always key value pairs - always strings
- Cookies are keyed to a domain and a path
- anytime the browser sends a request which matches the domain and path of a cookie on the device, the cookie is sent back with it
- Cookies are cool because we are essentially outsourcing memory to the browser

## Demo 1 - Language Selector

- site with 2 pages (Home and About)
- User will be able to select from up to 6 languages
- The browser will remember that selection, so the next visit is consistent

// :53

## Demo 2 - User Auth

- [x] new page `/register` to sign up
- [x] new page `/login` to log in
- [x] post route handler for register
- [x] post route handler for login
- [x] global user "database"
- [x] new page `/protected` - show dynamic
- [x] logout route
