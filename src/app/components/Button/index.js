import React from "react";
import "./index.scss";
import { HashLink as Link } from "react-router-hash-link";

const Button = ({ title, size, type, path }) => {
  if (type === 1) {
    return (
      <Link className="box-1" to={path} smooth>
        <div className="btn btn-one" style={size}>
          <span>{title}</span>
        </div>
      </Link>
    );
  } else {
    return (
      <Link className="box-3" to={path} smooth>
        <div className="btn btn-three" style={size}>
          <span>{title}</span>
        </div>
      </Link>
    );
  }
};

export default Button;
