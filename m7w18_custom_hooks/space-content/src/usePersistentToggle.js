import useLocalStorage from "./useLocalStorage";

const usePersistentToggle = (key, initialValue) => {
  const [state, setState] = useLocalStorage(key, initialValue);

  const toggle = () => {
    setState(state === "true" ? "false" : "true");
  };

  return [Boolean(state === "true"), toggle];
};

export default usePersistentToggle;
