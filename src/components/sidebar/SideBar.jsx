import React from "react";
import "./SideBar.scss";
const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="menu">
        <li className="menu__item home">Home</li>
        <li className="menu__item">Services</li>
        <li className="menu__item menu__item--active">News</li>
        <li className="menu__item">Blog</li>
        <li className="menu__item">Contact</li>
      </ul>
    </div>
  );
};

export default SideBar;
