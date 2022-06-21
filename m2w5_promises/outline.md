# Async Review

- setTimeout
- Show callback structure
  - order of console logs
  - reference of a function vs inline reference
- Talk about what Node does behind the scences

# Illustrate Callback hell

- `const fs = require("fs");`
- fs.Readfile the file in files
  - `fs.readFile("files/name.txt", "utf8", (err, res) => {})`
- make files folder with name.txt, put my name in it, read it
  - what can we do with this data now? in or out of the callback?
  - let name in outside scope?
- npm i request
- `const request = require("request");`
- request to https://api.agify.io?name=name
  - `request("https://api.agify.io?name=name", (err, res, body) => {})`
- remember to JSON.parse body
- fs.Writefile to file in the files
  - `fs.writeFile("files/result.txt", data, "utf8", (err) => {})`
- result.txt
- Illustrate issues
  - Readability
  - Error Handling
  - Scalability

# Introduction to Promises

// an object, instance of a class
// has some special methods
// has a status state
// - pending
// - fulfilled (resolved, rejected)
// promises have special methods to define behaviour based on fulfilled status

- `const fs = require("fs/promises");`
- npm i request-promise-native
- `const request = require("request-promise-native");`
- Recreate callback example
- Show .then
- Chain of Promises

# Error Handling with Promises (vs callbacks)

- Show .catch
- Diverging flows, multiple catches
- .finally()?

# Parallelizing async things (Promise.all) OPTIONAL

- Promise.all
- Promise.race
- Promise.allSettled
- Promise.any

# Creating our own promises OPTIONAL

- new Promise
- reject/resolve
- compare to implemented promise functions
