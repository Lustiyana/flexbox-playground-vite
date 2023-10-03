import React, { useState } from "react";
import { useSelector } from "react-redux";

const CopyButton = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Copy Text</button>
    </div>
  );
};

export default CopyButton;
