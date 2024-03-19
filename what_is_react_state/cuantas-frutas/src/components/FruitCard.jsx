export const FruitCard = (props) => {
  return (
    <article className="card flow row-item-grow">
      <h3>Bananas</h3>
      <img src="banana.svg" alt="Banana" height="80px" />
      <p>Current Stock: 0</p>
      <button>Add Banana</button>
    </article>
  );
};
