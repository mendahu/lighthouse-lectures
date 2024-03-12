// const props = {
// title: "My Article Header 1"
// body: "This is my article text"
// }

export const Article = (props) => {
  return (
    <article>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <span>{props.count}</span>
    </article>
  );
};
