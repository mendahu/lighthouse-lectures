const defaultTitle = "Default title";

const Article = (props) => {
  const title = props.title || defaultTitle;

  return (
    <article>
      <h2>{title}</h2>
      <p>{props.text}</p>
    </article>
  );
};

export default Article;
