import "./Profile.css";

export default function Profile(props) {
  return (
    <section>
      <div className="profile-picture">
        <img src={props.logo} alt={props.alt} />
      </div>
      <div className="profile-block">
        <h2>{props.name}</h2>
        <h3>Profile</h3>
        <p>{props.description}</p>
        <h3>Tags</h3>
        <ul>
          {props.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
