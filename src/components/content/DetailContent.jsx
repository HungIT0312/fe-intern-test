import React from "react";
import "./DetailContent.scss";
const DetailContent = (props) => {
  return (
    <div className="detail__item">
      <div className="detail__title">Lorem ipsum dolor sit amet</div>
      <div className="main">
        <div className="main__thumbnail">
          <img src={props.image} alt="" className="" />
        </div>
        <p className="main__para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
          sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
          massa in metus bibendum congue. Pellentesque ultrices liquam egestas
          nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
          est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum
          mattis.
        </p>
      </div>
    </div>
  );
};

export default DetailContent;
