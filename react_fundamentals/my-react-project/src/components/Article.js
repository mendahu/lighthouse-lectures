function Article(props) {
  // defintion of props inside of the component
  // console.log(props);

  const clickHandler = () => {
    console.log("Clicked!", props.header);
  };

  return (
    <article onClick={clickHandler}>
      <h1>{props.header}</h1>
      <p>{props.text}</p>
    </article>
  );
}

export default Article;
