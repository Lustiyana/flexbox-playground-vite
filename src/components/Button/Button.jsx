import React from "react";

const Button = ({ onClick, label, color, outline, type }) => {
  const colors = {
    primary: "btn-accent",
  };

  return (
    <button
      className={`btn ${colors[color]} ${outline ? "btn-outline" : ""}`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
