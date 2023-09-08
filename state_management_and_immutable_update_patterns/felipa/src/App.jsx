// Styles
import "./App.css";

// Libraries
import { useReducer, useState } from "react";

// Components
import Profile from "./Profile";
import Navbar from "./Navbar";
import Loading from "./components/Loading";

//Helpers
import { generateRandomHexCode } from "./helpers/helpers";

const defaultState = {
  loggedIn: false,
  loading: false,
  logo: "frog_profile.jpg",
  tags: [
    {
      id: "e930db",
      label: "green",
    },
    {
      id: "82492e",
      label: "hungry",
    },
    {
      id: "cd82dc",
      label: "happy",
    },
  ],
  name: "Felipa",
  description:
    "Felipa is a friendly tree frog who enjoys spending her days sleeping and her nights chasing mosquitos for a delicious meal.",
};

function App() {
  // const [user, setUser] = useState(defaultState);

  // const login = () => {
  //   console.log("login");

  //   // // recreate the entire object from scratch
  //   // const newUser = {
  //   //   loggedIn: true,
  //   //   loading: user.loading,
  //   //   logo: user.logo,
  //   //   tags: user.tags,
  //   //   name: user.name,
  //   //   description: user.description,
  //   // };

  //   // Spread operator
  //   const newUser = { ...user, loggedIn: true };

  //   // // Object.assign
  //   // const newUser = Object.assign({}, user, { loggedIn: true });

  //   setUser(newUser);
  // };

  // const logout = () => {
  //   console.log("logout");
  //   const newUser = { ...user, loggedIn: false };
  //   setUser(newUser);
  // };

  // const updateName = (name) => {
  //   const newUser = { ...user, name };
  //   setUser(newUser);
  // };

  // const updateDescription = (description) => {
  //   const newUser = { ...user, description };
  //   setUser(newUser);
  // };

  // const addTag = (label) => {
  //   // Spread operator for tags
  //   const newTags = [...user.tags];
  //   // spread operator for object
  //   const newUser = { ...user, tags: newTags };

  //   // generate new id
  //   const id = generateRandomHexCode();

  //   newUser.tags.push({ id, label });
  //   setUser(newUser);
  // };

  // const removeTag = (id) => {
  //   // Spread operator for tags
  //   const newTags = [...user.tags];
  //   // spread operator for object
  //   const newUser = { ...user, tags: newTags };

  //   const tagIndex = newUser.tags.findIndex((tag) => tag.id === id);

  //   newUser.tags.splice(tagIndex, 1);
  //   setUser(newUser);
  // };

  // REDUCER PATTERN
  // Both userActions and userReducer can be abstracted to another file

  // defining actions that the reducer accepts
  // these match the original functions we had made
  // string values behind variable names to avoid typos
  const userActions = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    UPDATE_NAME: "UPDATE_NAME",
    UPDATE_DESCRIPTION: "UPDATE_DESCRIPTION",
    ADD_TAG: "ADD_TAG",
    REMOVE_TAG: "REMOVE_TAG",
  };

  const userReducer = (user, action) => {
    // make some changes

    switch (action.type) {
      case userActions.LOGIN: {
        const newUser = { ...user, loggedIn: true };
        return newUser; // reducer must ALWAYS return the new state
      }
      case userActions.LOGOUT: {
        const newUser = { ...user, loggedIn: false };
        return newUser;
      }
      case userActions.UPDATE_NAME: {
        const newUser = { ...user, name: action.payload };
        return newUser;
      }
      case userActions.UPDATE_DESCRIPTION: {
        const newUser = { ...user, description: action.payload };
        return newUser;
      }
      case userActions.ADD_TAG: {
        // Spread operator for tags
        const newTags = [...user.tags];
        // spread operator for object
        const newUser = { ...user, tags: newTags };
        const id = generateRandomHexCode();

        newUser.tags.push({ id, label: action.payload });
        return newUser;
      }
      case userActions.REMOVE_TAG: {
        // Spread operator for tags
        const newTags = [...user.tags];
        // spread operator for object
        const newUser = { ...user, tags: newTags };

        const tagIndex = newUser.tags.findIndex(
          (tag) => tag.id === action.payload
        );

        newUser.tags.splice(tagIndex, 1);
        return newUser;
      }
      default: {
        return user;
      }
    }
  };

  // this is the actual useReducer hook, which must stay in the component
  const [user, dispatch] = useReducer(userReducer, defaultState);

  // wrapper functions for dispatch
  // doing these all right here allows for dispatch to not need to be passed down as a prop
  const login = () => dispatch({ type: userActions.LOGIN });
  const logout = () => dispatch({ type: userActions.LOGOUT });
  const updateName = (name) =>
    dispatch({ type: userActions.UPDATE_NAME, payload: name });
  const updateDescription = (description) =>
    dispatch({ type: userActions.UPDATE_DESCRIPTION, payload: description });
  const addTag = (label) =>
    dispatch({ type: userActions.ADD_TAG, payload: label });
  const removeTag = (id) =>
    dispatch({ type: userActions.REMOVE_TAG, payload: id });

  // For reducer pattern, we made the wrappers take the same parameters/arguments,
  // and so we didn't need to change any logic in Profile or Navbar to match it

  return (
    <div>
      <Navbar
        loggedIn={user.loggedIn}
        name={user.name}
        onLogin={login}
        onLogout={logout}
      />
      <main>
        {user.loading ? (
          <Loading />
        ) : (
          <>
            {user.loggedIn ? (
              <Profile
                logo={user.logo}
                alt={`Profile picture for ${user.name}`}
                name={user.name}
                description={user.description}
                tags={user.tags}
                onUpdateName={updateName}
                onUpdateDescription={updateDescription}
                onAddTag={addTag}
                onRemoveTag={removeTag}
              />
            ) : (
              <>
                <h2>Please login to see your profile!</h2>
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
