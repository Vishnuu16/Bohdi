import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbarall from "./common/Navbarall";
import Footer from "./common/Footer";

const Layout = () => {
  const location = useLocation();

  // List of routes where navbar and footer should be hidden
  const hideNavbarAndFooterRoutes = ["/login", "/register"];

  const shouldHide = hideNavbarAndFooterRoutes.includes(location.pathname);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {!shouldHide && (
        <header>
          <Navbarall />
        </header>
      )}

      {/* Main content */}
      <main className={`flex-grow relative ${!shouldHide ? "top-40" : ""}`}>
        <Outlet />
      </main>

      {!shouldHide && (
        <footer className="w-full mt-40">
          {" "}
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default Layout;
