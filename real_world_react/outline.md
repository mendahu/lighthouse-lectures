# React Router

- Problem Statement
- Routes in general
- Nested, dynamic route
- Layout

# useContext

- Problem Statement
- Value store (config)
- Putting in State
- Implications of putting state in Context
- Wrapper Hook

# Jake's Pet Profile

/ - Profile page with stats, list
/pets/:id - individual pet profiles
/signin - signin page
All with a layout

- Context store pets data for access on all pages
- Context store user data to allow login/protection

## React Router and Client Side Routing

- Earlier in the bootcamp we built a server-rendered application called Tinyapp
- Tinyapp was built around pages - each route endpoint had an EJS tempalte which was rendered and delivered to the browser upon request
  - Each time the user navigated to a new page, a new HTML document was delivered.
- This has alot of advantages, one of which includes the ability to use the built in browser tools to navigate.
  - Your url always shows you where you're at in the application
  - You can enter the website from any URL
  - Your history stack can be used for back and forward to retrace your steps
  - You can use query parameters to ask for additional information
- With React, we have what's called a Single Page Application (SPA). This is a totally different way to build an app, and as we've seen through these projects we have but a single HTML file that is delivered once, and everything else from there is client-rendered.
- This also has advantages, like dynamic UIs, easy local state management, and faster load times.
- However, all thes browser navigation benefits disappear
  - We have on entrypoint to the application
  - Changing the UI and "navigating" around the app does not change our browser history stack
  - there is no location information in the URL
- This was a problem that needed to be solved, and so lots of smart people put there heads together and came up with some solutions.
- The browser tools, like accessing the URL to make changes, accessing the history stack, fetching query parameters, are all available via API.
  - History - https://developer.mozilla.org/en-US/docs/Web/API/History
  - Location - https://developer.mozilla.org/en-US/docs/Web/API/Location
- This means that jusing JavaScript, you can "simulate" this actions that might happen on a server-rendered app.
  - You can change the URL to match different "pages".
  - You can fetch query params
  - You can manually add steps to your browser history
- This is a lot of work of course, and so eventually someone put together a library to help with that, and of those libraries, React Router is probably one of the most popular and well-known ones.
- React router is a tool we can drop into a React application to add this functionality automatically, with only a little bit of configuration.

- https://reactrouter.com/en/main

## Demo App - Pet Profile

- This little app is designed for a user to feature their pets!
- It has three pages (a profile, a pet profile and a signin page)
- We are going to implement this with React Router and then use React Context to help with some of our data

## Implementing Routes

`npm install react-router-dom`

### Adding our first routes

// index.js

```js
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

<RouterProvider router={router} />;
```

- Verify that the page still loads. You'll notice there is no Layout bar, but thats ok we'll fix that later!
- Now let's add another route

```js
  {
    path: "/signin",
    element: <SignIn />,
  },
```

- You'll notice that when we type the path in to the browser, the page actually reloads. This is not client-side routing!
- We can't overcome what the user does with the browser, but what's cool here is React Router loaded the app at a different entry point!
- We can however control client side routing using links on the page. Let's add a login link to the app page.

```jsx
{
  !user && <Link to="/signin">Login</Link>;
}
```

- <Link> is a wrapper around an anchor tag, but it executes javascript to control the page change. You stay in side the single page app when the page changes - its all client rendered.
- When possible with React-Router, use `<Link>` for all your internal navigation. <a> will cause a page reload!

### Using layouts

- React Router gives you an easy way to integrate layouts or wrapper components using nested routes. Let's bring back our `<App>` component and make it in to a layout that our pages will render inside of.

// App.jsx

```jsx
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
```

- the Outlet component is a tool from React Router which shows you where the children routes will render into. So all you have to do is wrap whatever layout you want around the Outlet.
- Then in our index file, we rearrange our object to shows the nested structure

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout component with Outlet
    children: [
      { path: "/", element: <Main /> },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);
```

- With the layout in place we can fix the link on the navbar to take us back to the main page, and the link to the login page as well!

```jsx
<Link to="/">Profile</Link>
          <Link to="/signin">
            <button>Login</button>
          </Link>
```

- We call also navigate programatically using the useNavigate hook. Now our login form can handle the response and redirect us to the main page.

```jsx
  const navigate = useNavigate();

        .then((res) => {
        navigate("/");
      })
```

### Dynamic Routes

- Just like in Express, we can create dynamic routes with parameters in the url. Our pet profile page wil have an id we can use to fetch the right pet.

```js
      {
        path: "/pets/:petId",
        element: <PetProfile />,
      }
```

- We can access this petId from the component using React Router's useParams hook

```js
const { petId } = useParams();

const pet = pets.find((pet) => pet.id === parseInt(petId)); // alter hard ocded pet lookup
```

Now our dynamic route works!

### Error Routes

-Lastly, we can add error route handling to catch navigation to routes that don't exist. If we put this in the root route, it will catch everything at "/"

```jsx
    errorElement: <ErrorPage />,
```

## React Router Conclusion

- There's a ton more that React Router can do but this is a good surface level exposure for you!
- It can help a react app "feel" like a multipage app and it's pretty easy to implement.
- A word of caution - this tool has undergone a lot of change and you will see different versions out there in the wild, and a lot of the syntax might not look like what we did today. That's ok! You can always go to the docs to learn more about any particular version. The important thing is to understand it's role and why you have it in your app.

# React Context

- We have a couple bugs in our app. The login feature doesn't seem to update state right, and the data fetching is at a component level with some duplication happening.
- Since we need the user state and the pets state across multiple pages and components (user is needed in the Navbar and the profile page, while pets is needed in the profile page and the pet profile page), the standard practice would be to "lift" up state to the top of the app and pass it down as props. This can normally work for you a lot of the time and should be your first solution.
- But what if this gets out of hand? What if we're passing down props more than just one-two components? What if we need this data everywhere in the whole app? Will we end up with a situation where we have a whole bunch of React state at the top of the tree and we'r eprop drilling everything all the way to the bottom of the leaves?
- Sometimes, state can get out of hand. User state is a common one you'll run in to. Since you'll need to check the user's login status and identity in many places, you'll find it's required to get access to it from wherever you are in the tree.
- React Context is designed to help solve this problem.
- This is a built in part of React and requires no additional libraries! Woot!
- React Context is like a special storage area that exists at some point in your tree, a place of your choosing.
- It's data is accessible to anywhere downstream of that part of the tree using a special hook called useContext.
- You can place your storage in the mmiddle of the tree if you know its only needed on that part of the app and down, or you can place it at the top to make it available everywhere.

- Let's first migrate our pet data to Context!

## Creating a Context

- First we need to create a new Context. I like to do this in its own file.

```js
import { createContext } from "react";

export const PetsContext = createContext([]);
```

This little function builds a new storage area in the react system and takes in a default value, which we'll set to an empty array for now.

- Now we need to decide where in our tree this data needs to be accessible.
- We know we need this in the "/" page, and we need it in the "/pets/:id" page.
- The common ancestor there is actually inside our `<App>` component, where the Outlet is.
- So let's decide that our outlet, basically anything passed into the layout, is our entry point
- This means the Navbar will not have access to it, but it doesn't need it so its ok.

- To make Context accessible, we need to import it and create a Provider.
- The provider also takes a value prop, which is where you can enter data to programatically change what's in context. For now we're going to make that also an empty array.

```jsx
function App() {
  return (
    <>
      <Navbar />
      <PetsContext.Provider value={[]}>
        <Outlet />
      </PetsContext.Provider>
    </>
  );
}
```

- Now, the context is "accessible" anywhere in that part of the tree.

- The last step is to access to context, which we do with the context hook.

// Main.jsx

```jsx
const petsContextValue = useContext(PetsContext);

console.log(petsContextValue);
```

As you can see, the empty array is accessible from the tree now. We did not have to pass any props into Main!

# Non-state values

- The simplest way to use Context is to store non-state values in there. A good candidate would be environment variable fallbacks and config data. Consider something like this:

```js
const config = {
  baseUrl: process.env.BASE_URL || "localhost:3000"
}

<ConfigContext.Provider value={config}>
  <MyApp />
</ConfigContext.Provider>
```

- This is some nice static data that you might need in lots of places. You want to try to grab your environement variable but make a fallback for your local environment, and you want to use this URL to do different things in different places of your app. Perfect for context!

- However, commonly you will want to add state to this context, since that is what really useful data in React looks like.
- To do that, all we do is return that state data into the value prop!
- I like to wrap this up in a hook so I can abstract it away.

```js
import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchPets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get("/api/pets").then((res) => {
      setPets(res.data.data);
    });
  }, []);

  return pets;
};
```

This hook very simply has the state for pets, and a useEffect to fetch it on first load.

It returns the pets array.

- Now we can inject this into the value prop

```js
function App() {
  const pets = useFetchPets();
  return (
    <>
      <Navbar />
      <PetsContext.Provider value={pets}>
        <Outlet />
      </PetsContext.Provider>
    </>
  );
}
```

- So what's going on here? Well, the hook instantiates some state to an empty array
- That array goes into context, which is used to render the first page
- The use effect fires, updating state
- The react tree rerenders in response to state
- its the same patternif the state is local but done further up the tree.
- and now the individual page can acces it too!

```js
const pets = useContext(PetsContext);
```

Most importantly, our app makes one less API call, and doesn't do it on page swaps. Let's add a link component to the main page List ITems so we can see it

```jsx
    <Link to={`/pets/${props.id}`}>
```

Navigating to the pet page and back to the profile page is seamless! No pets calls!

### Solving the USer problem

- Let's work on our user problem again!
- First, let's make some user state that we can store in a context

```js
// user.js
const UserContext = createContext(null);

// useFetchUser.js
import { useState } from "react";

export const useFetchUser = () => {
  const [user, setUser] = useState(null);

  const user_id = Cookies.get("user_id");

  useEffect(() => {
    if (!user_id) {
      return;
    }
    console.log(user_id);
    axios.get(`/api/users/${user_id}`).then((res) => {
      setUser(res.data.data);
    });
  }, [user_id]);

  return { user };
};

// App.js

function App() {
  const pets = useFetchPets();
  const user = useFetchUser();

  return (
    <UserContext.Provider value={user}>
      <Navbar />
      <PetsContext.Provider value={pets}>
        <Outlet />
      </PetsContext.Provider>
    </UserContext.Provider>
  );
}
```

- Note how we can nest providers.
- Note how we are putting the user provider higher up so Navbar as access to it.

- Now we can conver the components to access it.

- Main now just reads the pets and user context very cleanly.

- Navbar can also read the context, but we have to solve a little problem with the logout function.
- we can move this function to the context as well! It's a hook so it can store logic.

```js
/// useFetchUSer

const logout = () => {
  axios.post("/api/logout").then((res) => {
    setUser(null);
  });
};
return { user, logout };
```

- And lastly, we need the login function from the sign in page to mvoe here too!
- This ones a bit complex because we have to manage our separation of concerns
  1. Gathering and validating form data
  2. Sending the login request to the server and updating state
  3. Redirecting to a new page

```js
// use fetch user

const login = (email, password) => {
  return axios
    .post("/api/login", {
      email,
      password,
    })
    .then((res) => {
      setUser(res.data.data);
    });
};

return { login };

// SignIn.jsx
const handleSubmit = (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  const email = form.get("email");
  const password = form.get("password");

  if (!email || !password) {
    return;
  }

  login(email, password)
    .then((res) => {
      navigate("/");
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
```

## Pitfalls of Context

- Context at first looks like a magic tool to never have to use props again. Sometimes it is like that.
- But there are some implications with it!
- Even though you aren't manually passing props down, that is still, ultimately, what is happening, and so the same react rules apply. If you change the context at the top of your tree, your entire app will rerender.
- So instead of limiting our re-rendering to a single component, we're destroying and building the whole site with every state change in context at the top of the tree.
- That can get out of hand if you're not careful.
- Imagine a more complex app with 3-4-5 providers and state that the user is changing a lot like likes or comments or something. That's a lot of front-end work.
- For this reason, generally React Context is best used for state that doesn't change a lot.
- The user stuff we used today is a great example - name, email, profile pics don't change often. We can tolerate an app rerender when the user changes their profile picture 1/year.
- IF you have state that changes a lot, you have a couple options
  1. Put it back at the component level and refetch it as needed in different places. This may require extra API calls.
  2. Use a more advanced state management library, like Redux which is designed to tackle this problem.

Parting words - check out that initial setup we did with React Router

```js
<RouterProvider router={router} />
```

hey! is that context???

### Optional - convenience wrappers for Context

```js
// requires two imports
// useContext
// UserContext
const { user } = useContext(UserContext);

// make a hook that wraps it because you're very lazy like me
const useUser = () => useContext(UserContext);
```
