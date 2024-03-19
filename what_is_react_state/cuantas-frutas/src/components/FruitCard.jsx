// Props definitions

// image
// singular label
// plural label
// count
// addFruit
// removeFruit

export const FruitCard = (props) => {
  console.log("Rendered: Fruitcard:", props.singularLabel);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValue = formData.get("count");
    const newCount = parseInt(formValue);
    props.adjustFruit(newCount);
  };

  return (
    <article className="card flow">
      <h3>{props.pluralLabel}</h3>
      <img src={props.image} alt={props.singularLabel} height="160px" />
      <p style={{ fontSize: "2rem" }}>Current Stock: {props.count}</p>
      <div className="row row-item-grow">
        <button onClick={props.addFruit}>↑ Add {props.singularLabel}</button>
        <button onClick={props.removeFruit}>
          ↓ Remove {props.singularLabel}
        </button>
      </div>
      <form className="row row-item-grow" onSubmit={handleFormSubmit}>
        <input type="number" name="count" placeholder="Enter amount" />
        <button type="submit">Adjust {props.pluralLabel}</button>
      </form>
    </article>
  );
};
