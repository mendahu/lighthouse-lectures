const Favourite = (props) => {
  const size = props.size || 30;
  return (
    <>
      <svg
        height={`${size}px`}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        style={{ stroke: "grey" }}
      >
        <path
          fill={props.faved ? "orange" : "grey"}
          fill-rule="evenodd"
          d="M4.25 1A2.25 2.25 0 002 3.25v10.83a1 1 0 001.478.878l4.403-2.394a.25.25 0 01.238 0l4.403 2.394A1 1 0 0014 14.08V3.25A2.25 2.25 0 0011.75 1h-7.5zM7 4.75a.75.75 0 011.5 0V6h1.25a.75.75 0 010 1.5H8.5v1.25a.75.75 0 01-1.5 0V7.5H5.75a.75.75 0 010-1.5H7V4.75z"
          clip-rule="evenodd"
        />
      </svg>
    </>
  );
};

export default Favourite;
