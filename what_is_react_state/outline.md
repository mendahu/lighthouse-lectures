# What is React State

- Today we're going to do a deeper dive in to react state to learn and internalize more on how it works and what some common practices are in using it to build things.
- The actual stuff we cover today won't actually be a lot of new things compared to the last time we talked, where we showed the `useState` hook, but the patterns will be new
- This will be an all-demo lecture - we'll get down to business and write React.

# Demo App

- We're going to build an inventory management app for fruit today
- This little app will allow you to keep track of fruit while you harvest them, and return some stats on how many fruit we have so far.
- The patterns we're going to learn today will help us reinforce state vs props, the rerendering process of React, lifting state up, and derivative state.

# Show Demo App

- Walk through App.js as well as FruitCard
- Go over requirements
  1. Make FruitCard Reusable by passing in props for the three different fruits
  2. Set up FruitCard to have a trackable State of count
  3. Set up FruitCard to increment and decrement fruits
  4. Set up FruitCard to have an input to adjust fruit in batches
  5. Create hideable Stats section
  6. Stats should reflect the state in the three counters
  7. Stats should be by count and by mass

## Requirement 1 - Props

- Remember, Props are a way for data to travel down from one component to another
- Props cannot travel up
- The source of data for props can be anywhere - Props only refers to its mechanism for transportation

1. FruitCard should take a `name` prop, an `image` prop, and an `alt` prop
2. Pass the three fruit's worth of props into each component
3. Adjust the card to consume all the props

- Remember, Props work like function arguments (because they are)
- You pass a prop in to a component when you render it, and they are then accessible inside the component using the props object

## Requirement 2 and 3 - Set up Counting State

1. Inside FruitCard, let's create a useState hook to track the count, then pass the number in to the `p` tag so it is visible on the card
2. Create an `addFruit` and a `removeFruit` function to set the state up and down
3. Talk about why the wrapper function might be a good idea. Discuss the benefit of an API.
4. Pass the two functions as click handlers to the two buttons
5. Test that they work!

- Are the states independent? Even though they are running on the same code in the same component?
- Remember, React State from useHook is all different instances if they are rendered at different places.

## Requirement 4 - Input

- Create Form handler for submission
- Prevent Default
- Gather Form State without controlled component
- Adjust state

```jsx
const handleUpdateName = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const count = formData.get("count");
  setCount(count);
};
```

- Talk about Controlled Component different again
- What is overkill?
- Use the platform!

## Requirement 5 - Hidebale Stats

1. Create a useState for `showStats` that is a boolean
2. Create a toggle function
3. connect toggle function to button
4. Conditionally render stats
5. Conditionally render button text

## Requirement 6 - Stats

- Alright now we're getting into some difficult stuff.
- We need to access all three values of counts for the three fruit inside the stats component
- Data cannot flow sideways or up in React so we need to lift this state up
- Discussion points:
  - Do the three states needs to be seaprate now? Do the names still work as is?
  - Do we have to bring up all the API functions?
  - What if we did a single state with an object?
  - Test rendering using console logs in the three fruit cards using object vs three use states
- Refactoring API functions to take params? Can we reduce increment, depcrement and adjust to a single function?

- Walk through Chart JS and give a cool little overview
- Talk about data structure of props and discuss best way to pass this in
- May need to map or change data
- Connect the props into the chart
- Test adjustments and see chart change in real time

## Requirement 7 - Derivative State

- Mass is a second chart, that give us a breakdown of the fruits not by individual counts but by plant mass.
- The mass is hardcoded in a little object of reference, but we need to calculate the data.
- Should this be new state or can we derive this?
- What is the benefit of deriving it?
- Do deriviate calcs an insert into new chart
- Test adjustments
