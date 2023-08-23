import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { Navbar, Footer, Loader } from "../components";

const MainLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration
        getKey={(location) => {
          const paths = ["/"];
          return paths.includes(location.pathname)
            ? location.pathname
            : location.key;
        }}
      />
    </Suspense>
  );
};

export default MainLayout;
