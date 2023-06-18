import { Spinner } from "react-bootstrap";

const Loader = ({ width = 30, height = 30 }: LoaderProps) => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        margin: "auto",
        display: "block",
      }}
    ></Spinner>
  );
};

export default Loader;
