import React from "react";

const BoxInput = ({ label, onChange, value }) => {
  return (
    <div>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="number"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default BoxInput;
