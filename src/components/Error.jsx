import { useRouteError } from "react-router";
import ErrImg from "../utils/error.svg";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <img className="errImg" src={ErrImg} />
    </div>
  );
};
export default Error;
