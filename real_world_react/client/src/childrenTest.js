const Card = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
      {props.title}
      {props.children}
    </div>
  );
};

const Page = () => {
  return (
    <>
      <Card title={<h1>Title</h1>} src="image.jpg">
        <p>Hi! This is some text</p>
        <ul>
          <li>Item 1</li>
          <li> Item 2</li>
        </ul>
      </Card>
      <Card
        title={
          <h1>
            <svg></svg>
            <span>Title</span>
          </h1>
        }
        src="image.jpg"
      >
        <div>
          <h2>Subtitle</h2>
          <p>Hi some more tex</p>
        </div>
      </Card>
    </>
  );
};
