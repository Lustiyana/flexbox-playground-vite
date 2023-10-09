import React from "react";

const Select = ({ onChange, value, items, label }) => {
  return (
    <div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <select
          className="select select-bordered"
          onChange={onChange}
          value={value}
        >
          {items?.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
