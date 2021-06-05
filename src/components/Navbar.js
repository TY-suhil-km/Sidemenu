import React from "react";
import "./assets/navbar.css";

export default function Navbar({ togglemenu }) {
  return (
    <div className="navbar_container shadow-lg">
      <i
        className="fas fa-bars px-2"
        onClick={() => {
          console.log(togglemenu);
          togglemenu();
        }}
      />
      Navbar
    </div>
  );
}
