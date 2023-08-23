import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { useState } from "react";

import { Navbar, Footer } from "../components";
import { Context } from "../context/context";

const MainLayout = () => {
  const [loginBoxShowed, setLoginBoxShowed] = useState(true);
  const [showLoginBox, setShowLoginBox] = useState(false);

  return (
    <Context.Provider
      value={{
        loginBoxShowed,
        setLoginBoxShowed,
        setShowLoginBox,
        showLoginBox,
      }}
    >
      <Suspense>
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
    </Context.Provider>
  );
};

export default MainLayout;
