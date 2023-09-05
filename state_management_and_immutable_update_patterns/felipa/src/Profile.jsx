// Styles
import { useState } from "react";
import "./Profile.css";
import Button from "./components/Button";

// Components
import Tag from "./components/Tag";

export default function Profile(props) {
  const [descriptionFormInput, setDescriptionFormInput] = useState("");

  const handleDescriptionChange = (event) => {
    // controlled component method
    event.preventDefault();
    props.onUpdateDescription(descriptionFormInput);
  };

  const handleNameChange = (event) => {
    event.preventDefault();

    // Extract form values using FormData Web API
    // https://developer.mozilla.org/en-US/docs/Web/API/FormData
    const formData = new FormData(event.target);
    props.onUpdateName(formData.get("name"));
  };

  const handleAddTag = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    props.onAddTag(formData.get("tag"));
  };

  return (
    <section>
      <div className="profile-picture">
        <img src={props.logo} alt={props.alt} />
      </div>
      <div className="profile-block">
        <h2>{props.name}</h2>
        <form
          method="PUT"
          className="text-field-form"
          onSubmit={handleNameChange}
        >
          <input type="text" name="name" placeholder="Update your name" />
          <Button type="submit" loadingText={"Updating..."}>
            Update
          </Button>
        </form>
        <h3>Profile</h3>
        <p>{props.description}</p>
        <form
          method="PUT"
          className="text-field-form"
          onSubmit={handleDescriptionChange}
        >
          <input
            value={descriptionFormInput}
            onChange={(e) => setDescriptionFormInput(e.target.value)}
            type="text"
            name="description"
            placeholder="Update your profile"
          />
          <Button type="submit" loadingText={"Updating..."}>
            Update
          </Button>
        </form>
        <h3>Tags</h3>
        <ul>
          {props.tags.map((tag) => (
            <li key={tag.id}>
              <Tag onClose={() => props.onRemoveTag(tag.id)}>{tag.label}</Tag>
            </li>
          ))}
        </ul>
        <form method="PUT" className="text-field-form" onSubmit={handleAddTag}>
          <input type="text" name="tag" placeholder="Add Tag" />
          <Button type="submit" loadingText={"Adding..."}>
            Add Tag
          </Button>
        </form>
      </div>
    </section>
  );
}
