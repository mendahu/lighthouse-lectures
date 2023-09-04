# State Management and Immutable Update Patterns

## Refresh on State Management

- State is data which represents the current state of the program as it exists in memory at any given time
- Programs all have dynamic data - state is what the current values of those dynamic pieces are. A static site would not have state.
- Managing state is a big part of creating applications, and it's a big part of React because of that. The entire render logic of React is conneted to state and changes to state.

## UI State vs DB Cache

- In a front-end application, you can sometimes think of state into two distinct categories.
- UI State are values which represent what parts of the dynamic UI are showing. Is a button disabled or not, is a modal open or not? What is the current date showed at the top of the page? What are the current values in a form?
  - UI State is often pretty simple and straightforward, and often lives at the component level (is co-located with the component it affects)
  - UI State can be and is often different for each user using the app at one time. If I type something into a form on my device, you don't see that value on yours.
- DB Cache is another more complex type of state. These values are often local copies of data which is saved and persisted on a central database. It is a cache which allows the front-end to display data without having to read it from the db every time.
  - Because DB Caching usually represents rows in a db, it's often more complex in structure. Think objects, arrays of objects vs primitives (this isn't a rule though)
  - There is additional complexity to keeping the cache up to date with the actual DB when values change. For example, if a user submits a form and those data go into the db, we also need to modify the local state to reflect those changes. They must be kept in sync.
  - DB Cache can live at the component level, but it often ends up being hoisted higher to page or application level, just by nature of its own characteristics. For example, a cache state representing the logged in user's information might be something you need on various pages across the app.
- We're going to talk about managing complex state using a simulated DB cache and UI state together

## Complex State Management Solutions

- As an aside, you should know that this is such a complex and common problem that there exists tooling solutions you can add on to React.
- A common library used is called Redux.
  - https://redux.js.org
  - Redux takes a strategy of centralizing all of your state and creating a whole bunch of special functionality around accessing it and changing it.
  - Another one is called Xstate, which is focused around state machines which are like complex UI patterns.
- What we're going to learn today is how to do it by hand so you can understand some of the core principles behind the process

## Complex State Example - Felipa the Frog Revisited
