import "./Header.css";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const Header = (props) => {
  const [count, setCount] = useLocalStorage("visitCount", 0);

  useEffect(() => {
    setCount(Number(count) + 1);
  }, []);

  return (
    <header>
      <div>
        <h1>SPACE CONTENT</h1>
      </div>
      <div>
        <p>You have visited {count} times.</p>
      </div>
    </header>
  );
};

export default Header;
