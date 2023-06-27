### To Do

- [ ] HTTP and cookies
- [ ] Render pages differently based on language preference
- [ ] Register user with email and password

## Review HTTP

- HTTP is Stateless
- HTTP is conditionless? ???
- Every request is new and have no knowledge of eachother
- Pros:
  - robust, it doesn't have dependencies, it can just exist and be happy
- Cons:
  - Has no context!!!
  - Authentication

## Cookies solve this!!

- A cookie is a small piece of information that the server creates, but the client stores

* Cookie a key value pair (eg. `userId=1`)
* It lives on the client's computer, but the server provides instructions to the client on how to set it up
* Cookies are keyed to a url and path
* Anytime the browser sends a new request to the url and path associated with a cookie, the cookie goes with it
* Its kind of a stateless workarond
* We are essentially outsourcing storage/memory to the client

# Demo - Language Selector

// :10 past the hour

# Demo - User authentication - the simple way
