import React from "react";
import logo from "../../assets/images/logoNCC.png";
import image1 from "../../assets/images/code.png";
import image2 from "../../assets/images/dw.png";
import image3 from "../../assets/images/url.png";
import "./Content.scss";
import DetailContent from "./DetailContent";
const Content = () => {
  return (
    <div className="content">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="paragraph">
        <div className="paragraph__title">Lorem ipsum dolor sit asmet?</div>
        <p className="paragraph__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>
      <div className="detail">
        <DetailContent image={image1} />
        <DetailContent image={image2} />
        <DetailContent image={image3} />
      </div>
    </div>
  );
};

export default Content;
