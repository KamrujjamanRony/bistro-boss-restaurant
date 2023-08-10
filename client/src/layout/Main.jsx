import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import NavBar from "../pages/Shared/NavBar";

const Main = () => {
  const location = useLocation();
  const loginStyle = location.pathname.includes("login") || location.pathname.includes("signUp");
  
  return (
    <>
      {loginStyle || <NavBar />}
      <Outlet />
      {loginStyle || <Footer />}
    </>
  );
  
};

export default Main;
