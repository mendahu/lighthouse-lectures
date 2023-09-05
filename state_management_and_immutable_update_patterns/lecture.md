# State Management and Immutable Update Patterns

- [ ] Refresh on State Management
- [ ] UI State vs DB caching
- [ ] Complex State management solutions
- [ ] Complex State Example
- [ ] Immutability
- [ ] Updating complex state without mutating
- [ ] useReducer
- [ ] Bonus Exercises: Loading states

## Refresh

- State is data which represents the current state of the program as it exists in memory at any given time
- Programs all have dynamic data - state is what the current values of those pieces are. Static sites do not have state, generally
- Managing states is a big part of creating apps, and therefore is a big part of React.

## UI State vs. DB Cache

- UI State are values which represent the parts of the dynamic UI which are visible to the user.
  - UI State is generally pretty straightforward, they often live at the component level (co-located with the component they affect)
  - UI State can be different for each user at any given time
- DB Cache (Database Cache) - often more complex. These are values which are local copies of data inside the app's database.
  - Benefits - the front end only has to query once and then can reference the results for all subsequent needs
  - Often more complex - Arrays of Objects, or nested objects
  - There is additional complexity here because, when the user makes persistent changes to the database, the local cache has to be updated as well.
  - DB Cache tends to live higher up in the tree. Not a rule, but a tendency

## State Management Tools

- There are a lot of tools you can add to help manage state
- Redux is an example

Return :21 past the hour

## Reducers

- Reducer is a function which takes in old state, and an action, and returns a new state
- Action param is an object with 2 properties
  - type: String value which defines the action type (for example `ADD_TAG`)
  - payload: any data necessary to perform the state change
