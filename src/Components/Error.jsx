import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h3>Opps!!! Error...</h3>
      <h2>
        {err.status}: {err.statusText}
      </h2>
    </>
  );
};

export default Error;
