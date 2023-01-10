### To Do

- [ ] HTTP and cookies
- [ ] Render pages differently based on language preference
- [ ] Register user with email and password

### Review of HTTP

- HTTP is Stateless
- No memory exists of one request to another
- Independent!!!
- Creates some problems with a few use cases
  - Very obvious problem: Authentication

### Cookies

- A cookie is _small_ piece of information that the server creates, but the client stores.
- it lives on the client computer, set and stored by the browser based on the instructions from the server in the response
- A cookie is keyed to a host/pathname
- Any requests that the client makes to a specific host/path, sends that cookie back
- We're outsourcing "memory" to the client's computer

## DEMO

- Two pages (home / about)
- Six languages
- The app will "remember" the preference using a cookie!!!

RETURN at 10:57 PST / 1:57 EST

# DEMO 2

- Authentication
- Login, Logout, Register
- Protected Page
