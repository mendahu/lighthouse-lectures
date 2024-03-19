export const FruitCard = (props) => {
  return (
    <article className="card flow">
      <h3>Bananas</h3>
      <img src="banana.svg" alt="Banana" height="160px" />
      <p>Current Stock: 0</p>
      <div className="row row-item-grow">
        <button>↑ Add Banana</button>
        <button>↓ Remove Banana</button>
      </div>
      <form className="row row-item-grow">
        <input type="number" name="count" placeholder="Enter amount" />
        <button type="submit">Adjust Bananas</button>
      </form>
    </article>
  );
};
