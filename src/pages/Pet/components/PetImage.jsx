import React from "react";

const PetImage = ({ src, alt, size = 320, onClick, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}  
      style={{
        width: `${size}px`,
        borderRadius: "10px",
        cursor: onClick ? "pointer" : "default",
        transition: "transform 0.2s",
      }}
      onClick={onClick}
    />
  );
};

export default PetImage;
