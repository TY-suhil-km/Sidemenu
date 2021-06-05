import React from "react";
import "./assets/home.css";
import Navbar from "./Navbar";
import Sidemenu from "./Sidemenu";

export default function Home() {
  const [toggleSideMenu, settoggleSideMenu] = React.useState(false);
  const togglemenu = () => {
    settoggleSideMenu(!toggleSideMenu);
  };
  return (
    <div className="home_container">
      <Navbar togglemenu={togglemenu} />
      <Sidemenu showMenu={toggleSideMenu} />
      <div className="content_container"></div>
    </div>
  );
}
