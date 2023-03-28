const BookCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.title} />
      <p>{props.description}</p>
    </div>
  );
};

export default BookCard;
