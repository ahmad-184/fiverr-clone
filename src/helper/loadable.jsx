import { Suspense } from "react";
import { Loader } from "../components";

const loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default loadable;
