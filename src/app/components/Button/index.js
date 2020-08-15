import React from "react";
import "./index.scss";

const Button = ({ title, size, color }) => {
  return (
    <div style={size}>
      <button style={color} className="button">
        {title}
      </button>
    </div>
  );
};

export default Button;
