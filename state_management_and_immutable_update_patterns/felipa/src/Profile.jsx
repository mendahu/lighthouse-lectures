import "./Profile.css";

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
          <button>Update</button>
        </form>
        <h3>Profile</h3>
        <p>{props.description}</p>
        <form className="text-field-form">
          <input type="text" placeholder="Update your profile" />
          <button>Update</button>
        </form>
        <h3>Tags</h3>
        <ul>
          {props.tags.map((tag) => (
            <li key={tag.id}>{tag.label}</li>
          ))}
        </ul>
        <form className="text-field-form">
          <input type="text" placeholder="Add Tag" />
          <button>Add Tag</button>
        </form>
      </div>
    </section>
  );
}
