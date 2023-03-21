# Component Based UI with React

- Today we're going to build a demo app with React to further expand out knowledge
- We'll be using Storybook to build components in isolation and then assemble them at the end
- Along the way we're going to learn some advanced techniques to help us build React apps better

## What is Storybook

https://storybook.js.org

- Storybook is a tool that developers can use to build Front-end components in isolation
- Each project can have a collection of components that are showcased in Storybook, allowing you to see their various states and test basic functionality
- Storybook is useful for:
  - Testing - easily verify all the component states work
  - Documentation - Show how components are supposed to be used
  - Showcase - Show designers and other stakeholders available components so they can be reused
  - Development - Build components without neededing to have your app up and running

## Demo App

- Today we're going to make a simple demo app that is a Google search engine clone that only looks up cows called Moogle
- It's going to have a search field, a search button, and a search results area
- We'll build the components in Storybook, then assemble together with their appropriate logic

```sh
npx create-react-app moogle
```

- go to storybook website, click to getting started

```sh
npx storybook init
```

- Notice how it reads the Create React App structure and configures itself
- Look at package.json and dependencies and scripts
- Bug fix `npm install --save-dev @testing-library/dom`

* Run storybook

```sh
npm run storybook
```

- Look around!
- Talk about Button - smallest component
- Preset States
- customize
- Show Header
- preset states, uses button
- Show page
- preset states, uses Header
- Show code for stories, how there is a default and then custom props for presets

- remove default stories

## Mockup

- Show Moogle Mockup
- This is what we're going to build!

# Set up skeleton

- Remove boiler plate
- Add CSS files and logo files to `public`
- Add skeleton with logo to App.js

```html
<main>
  <div className="logo-container">
    <img src="logo.png" alt="Moogle Logo" />
  </div>
</main>
```

## Search Bar

- Let's go make the search bar in Storybook
- Create `SearchBar.jsx`

```jsx
<SearchBar label="search" />;

import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="searchbar">
      <input className="searchbar-input" />
      <button
        className="searchbar-button"
        onClick={() => console.log("clicked")}
      >
        {props.label}
      </button>
    </div>
  );
};

export default SearchBar;
```

- Create the story

```jsx
import React from "react";

import SearchBar from "./SearchBar";

export default {
  title: "Moogle/SearchBar",
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Search",
};
```

- Add some state for the controlled component

```jsx
const [searchTerm, setSearchTerm] = useState("");

<input
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
  className="searchbar-input"
/>;
```

## React Dev Tools

- Let's take a chance to check out React Dev tools
- React dev tools is an extension you can install on your Chrome browser that is super handy for troubleshooting and developing
- You can see how the component tree is laid out, you can see how props are passed in, and you can see live state view to see how it is changing over time.
- Show selector tool
- Show search

## Search Result

- Let's build a search result component
- We have a data structure we're going to be working with from our cows.json file
- name, image, tags, description
- Let's build SearchResult.jsx

```jsx
const SearchResult = (props) => {
  return (
    <article className="searchresult">
      <div>
        <img src={props.image} alt={props.name} />
      </div>
      <div>
        <h2>{props.name}</h2>
        <div>
          <ul>{"?"}</ul>
        </div>
        <p>{props.description}</p>
      </div>
    </article>
  );
};

export default SearchResult;
```

and a story

```jsx
import React from "react";

import SearchResult from "./SearchResult";

export default {
  title: "Moogle/SearchResult",
  component: SearchResult,
};

const Template = (args) => <SearchResult {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "My Cow",
  tags: ["big", "dairy", "hardy"],
  description: "This cow rocks",
  image:
    "https://cdn.agronomag.com/wp-content/uploads/2022/08/Jersey-cattle.jpg",
};
```

We can use storybook to adjust our styling, too and watch as it changes!

Some things to note as we play with this in Storybook

- We can try different text lengths out
- We can try different images
- We can see what happens if there are no tags or a lot of tags

- Fix up tags

```jsx
const tags = props.tags.map((t, i) => (
  <li className="tag" key={i}>
    {t}
  </li>
));
```

- do it without the key first and show dev tools

## SearchResultList

```jsx
import SearchResult from "./SearchResult";

const SearchResultList = (props) => {
  return (
    <section className="results">
      <h1>Results</h1>
      {props.results.map((r, i) => {
        return <SearchResult />;
      })}
    </section>
  );
};

export default SearchResultList;
```

- How to deal with results
- spread props and pass them right through {...props}

```jsx
<SearchResult
  name={r.name}
  description={r.description}
  image={r.image}
  tags={r.tags}
  key={i}
/>

//vs

<SearchResult {...r} />
```

- pros cons
- pitfalls?

- Make a story

```jsx
import React from "react";

import SearchResultList from "./SearchResultList";

export default {
  title: "Moogle/SearchResultList",
  component: SearchResultList,
};

const Template = (args) => <SearchResultList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  results: [
    // bring in data from cows.json
  ],
};
```

- now we notice it needs margin!

```css
.results {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
```

- Import SearchResultList to App
- Import cows.json
- render some cows

## Making the logic

- check out the app in react dev tools
- looks at props
- look at tree
- Notice how all three of these components, App, SearchBar, Search Result List are all connected
- We need state from the searchbar input to filter the values which get displayed in search result list.
- With react, data can only flow downhill, it cannot go up and it cannot go sideways.
- This is a common problem in React and we're going to learn a pattern to solve it called "lifting state up"

- Move use state to App
- Pass state and setter into SearchBar
- Consume props in SearchBar
- Review in react dev tools

- Talk about passing the function in to onChange and anonymous vs named, references, etc
- Talk about state patterns, where to store state
- Why not store everything in App and pass it all down?

## Storing search results

-Create search results state

```jsx
const [searchResults, setSearchResults] = useState([]);
```

- Pass into SearchResult List

- How do we action a search? Now we have the opposite problem where a button click down in a component has to trigger some logic up in the parent
- We can define our functions in the parent and pass them to the child for clicking

```js
const handleSearch = () => {
  const filteredResults = cows.filter((c) => {
    return (
      c.name.includes(searchTerm) ||
      c.description.includes(searchTerm) ||
      c.tags.includes(searchTerm)
    );
  });

  setSearchResults(filteredResults);
};
```

- pass down

- Talk about pattern for dumb component
- centralized logic for searching
- presentation logic only below

- Bug - empty search term
