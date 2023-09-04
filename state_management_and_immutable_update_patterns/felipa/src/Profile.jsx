// Styles
import "./Profile.css";
import Button from "./components/Button";

// Components
import Tag from "./components/Tag";

export default function Profile(props) {
  return (
    <section>
      <div className="profile-picture">
        <img src={props.logo} alt={props.alt} />
      </div>
      <div className="profile-block">
        <h2>{props.name}</h2>
        <form className="text-field-form">
          <input type="text" placeholder="Update your name" />
          <Button loadingText={"Updating..."}>Update</Button>
        </form>
        <h3>Profile</h3>
        <p>{props.description}</p>
        <form className="text-field-form">
          <input type="text" placeholder="Update your profile" />
          <Button loadingText={"Updating..."}>Update</Button>
        </form>
        <h3>Tags</h3>
        <ul>
          {props.tags.map((tag) => (
            <li key={tag.id}>
              <Tag>{tag.label}</Tag>
            </li>
          ))}
        </ul>
        <form className="text-field-form">
          <input type="text" placeholder="Add Tag" />
          <Button loadingText={"Adding..."}>Add Tag</Button>
        </form>
      </div>
    </section>
  );
}
