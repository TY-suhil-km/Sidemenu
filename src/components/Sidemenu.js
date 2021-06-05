import React from "react";
import "./assets/sidemenu.css";

export default function Sidemenu({ showMenu }) {
  return (
    <div
      className={
        showMenu ? "sidemenu_container_visible" : "sidemenu_container_invisible"
      }
    >
      sidemenu
    </div>
  );
}
