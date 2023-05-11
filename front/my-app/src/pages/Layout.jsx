import { Outlet} from "react-router-dom";
import Cookies from "universal-cookie";

import AppBarComponentUser from "./AppBarComponentUser";
import BodyComponent from "./BodyComponent";
import FooterComponent from "./FooterComponent";

import Dashboard from "./Dashboard/Dashboard";

const cookies = new Cookies();
const Layout = () => {
  const componentDidMount = () => {
    if (!cookies.get("correo")) {
      window.location.href = "./login";
    }
  };
  componentDidMount();
  // console.log(cookies.get("rol"));
  if (cookies.get("rol") == 5) {
    return (
      <>
        <AppBarComponentUser />       

        {/* <BodyComponent /> */}
        <Outlet/>

        <FooterComponent />
      </>
    );
  } else {
    return (
      <>
        <Dashboard />

        {/* <AppBarComponentUser /> */}
      </>
    );
  }
};

export default Layout;
