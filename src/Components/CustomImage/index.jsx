import React from "react";

const CustomImage = ({ source, alt, clickFunction }) => {
  return (
    <img src={source} alt={alt} class="custom_image" onClick={clickFunction} />
  );
};

export default CustomImage;
