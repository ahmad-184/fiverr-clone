import { Suspense } from "react";

export default function loader(Component) {
  return (
    <Suspense>
      <Component />
    </Suspense>
  );
}
